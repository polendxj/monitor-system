var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ResourceUtils = require('./ResourceUtils.js');
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var AntiFraudContants = require('../constants/AntiFraudConstants');
var APIEndpoints = require('../constants/APIEndpoints.js');
var CriteriaConstants = require('../constants/CriteriaConstants').ActionTypes;
var NotificationStore=require('../stores/NotificationStore');
var store = require('store2');
var jQuery = require('jquery');
var jwt = require('jsonwebtoken');

var app = {
    application: {}
};
var _current = {};
var resources = {
    "ACCOUNT": false,
    "APPLICATION": false
};
var isInited = false;

var AppStore = assign({}, EventEmitter.prototype, {

    login: function(username, password) {
        ResourceUtils.AUTH.POST({
            username: username,
            password: password
        },
        null,
        function(json) {
            store("access_token", json.token);
            this.emitLogin();
        }.bind(this),
        function(json) {
            this.emitLoginFailed();
        }.bind(this));
    },

    logout: function() {
        store("access_token", null);
        app = {};
        this.emitLogout();
    },

    verify: function() {
        app.token = jwt.decode(store("access_token"));
        var exp = 0,
            now = 0;
        if (app.token) {
            exp = new Date(app.token.exp * 1000);
            now = new Date();
            if (exp < now) store("access_token", null);
        }
        return app.token && Object.keys(app.token).length > 0 && exp >= now;
    },

    init: function() {
        resources = {
            "ACCOUNT": false,
            "APPLICATION": false
        };
        isInited = false;
        app.token = jwt.decode(store("access_token"));
        if (!this.verify()) return false;
        app.application = {};
        ResourceUtils.ACCOUNT.GET(null, function(json) {
            app.user = json.user;
            this.emitInit("ACCOUNT");
        }.bind(this));
        ResourceUtils.APPLICATION.GET(null, function(json) {
            app._application = json.data;
            json.data.forEach(function(application, index) {
                /*
                 * transform scenarios type to display name
                 */
                switch(application.scenarios) {
                    case "TopUp":
                        application.scenarios_display = "推广套利欺诈";
                        break;
                    case "HaoYangMao":
                        application.scenarios_display = "游戏代充欺诈";
                        break;
                    case "publisher_fraud":
                        application.scenarios_display = "广告流量欺诈";
                        break;
                    default:
                        application.scenarios_display = "默认";
                };
                app.application[application.tid] = application;
            }.bind(this));
            if (json.data.length > 0) {
                var tid = store('default_tid');
                if (tid && app.application[tid]) {
                    this.setCurrent(tid);
                } else {
                    this.setCurrent(json.data[0].tid);
                }
            }
            this.emitInit("APPLICATION");
            NotificationStore.bootNotificationDetection();
        }.bind(this));

    },

    del: function(tid) {
        ResourceUtils.APPLICATION.DELETE(tid, function(json) {
            this.init();
        }.bind(this));
    },

    add: function(payload) {
        ResourceUtils.APPLICATION.POST({
            app_name: payload.app_name,
            os_type: payload.app_type,
            package_name: payload.app_package,
            scenarios: payload.app_scenarios
        },
        null,
        function(json) {
            ResourceUtils.LISTGEN.GET({
                tid: json.tid,
                scenarios: json.scenarios
            }, function(json) {
                this.init();
            }.bind(this));
        }.bind(this));
    },

    update: function(payload) {
        var ajaxOpt = ResourceUtils.ajaxOpt();
        assign(ajaxOpt, {
            url: APIEndpoints['APPLICATION'] + payload.app_id + "/",
            type: 'PUT',
            data: JSON.stringify({
                tid: payload.tid,
                package_name: payload.app_package,
                postback: payload.postback,
                scenarios: payload.app_scenarios
            })
        });
        jQuery.ajax(ajaxOpt).then(function(json) {
            ResourceUtils.LISTGEN.GET({
                tid: json.tid,
                scenarios: json.scenarios
            }, function(json) {
                this.init();
            }.bind(this));
        }.bind(this));
    },

    getNotifications: function (tokenID) {
        ResourceUtils.SCAN_SYS_NOTIFICATION.GET({
            tokenID: tokenID,
        }, function(json) {
            console.log(json);
        }.bind(this));
    },

    setEntity: function(entity) {
        assign(app, {
            entity: entity
        });
    },

    getEntity: function() {
        return app.entity;
    },

    getAll: function() {
        return app;
    },

    isInited: function() {
        return isInited;
    },

    setCurrent: function(tid) {
        store("default_tid", tid);
        _current = app.application[tid];
        this.emitChange();
    },

    getCurrent: function() {
        return _current;
    },

    emitChange: function() {
        this.emit("CHANGE");
    },

    addChangeListener: function(callback) {
        this.on("CHANGE", callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener("CHANGE", callback);
    },

    emitLogout: function() {
        this.emit("LOGOUT");
    },

    addLogoutListener: function(callback) {
        this.on("LOGOUT", callback);
    },

    removeLogoutListener: function(callback) {
        this.removeListener("LOGOUT", callback);
    },

    emitLoginFailed: function() {
        this.emit("LOGINFAILED");
    },

    addLoginFailedListener: function(callback) {
        this.on("LOGINFAILED", callback);
    },

    removeLoginFailedListener: function(callback) {
        this.removeListener("LOGINFAILED", callback);
    },

    emitLogin: function() {
        this.emit("LOGIN");
    },

    addLoginListener: function(callback) {
        this.on("LOGIN", callback);
    },

    removeLoginListener: function(callback) {
        this.removeListener("LOGIN", callback);
    },

    emitInit: function(resouce) {
        var isFinished = true;
        resources[resouce] = true;
        for(var resouce in resources) {
            isFinished = resources[resouce] && isFinished ? true : false;
        }
        if(isFinished) {
            isInited = true;
            this.emit("INIT");
        }
    },

    addInitListener: function(callback) {
        this.on("INIT", callback);
    },

    removeInitListener: function(callback) {
        this.removeListener("INIT", callback);
    }

});

AntiFraudDispatcher.register(function(action) {
    switch(action.actionType) {
        case AntiFraudContants.LOGIN:
            AppStore.login(action.username, action.password);
            break;
        case AntiFraudContants.LOGOUT:
            AppStore.logout();
            break;
        case AntiFraudContants.APP_INIT:
            AppStore.init();
            break;
        case AntiFraudContants.APP_DEL:
            AppStore.del(action.tid);
            break;
        case AntiFraudContants.APP_ADD:
            AppStore.add(action.payload);
            break;
        case AntiFraudContants.APP_UPDATE:
            AppStore.update(action.payload);
            break;
        case AntiFraudContants.APP_ENTITY:
            AppStore.setEntity(action.entity);
            break;
        case CriteriaConstants.APPLICATION_CHANGE:
            AppStore.setCurrent(action.tid);
            break;
        default:
            break;
    }
});

module.exports = AppStore;
