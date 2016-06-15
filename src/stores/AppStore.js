var React = require("react");
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var MonitorConstants = require('../constants/MonitorConstants');
var store = require('store2');
var jQuery = require('jquery');


var curToolBar = [];
var preToolBarID = -1;
var toolBarTitle="";
var curOperator={id:-1,name:""};

var AppStore = assign({}, EventEmitter.prototype, {
    changeToolBar: function (id, tools,title) {
        curToolBar =tools;
        preToolBarID=id;
        toolBarTitle=title;
        this.emitChange(this.events.change_toolbar);
    },
    setOperator: function (id,text) {
        curOperator.id=id;
        curOperator.name=text;
        this.emitChange(this.events.current_operator);
    },
    getOperator: function () {
        return curOperator;
    },
    getCurrentToolBar: function () {
        return curToolBar.bar;
    },
    getPreToolBarID: function () {
        return preToolBarID;
    },
    getToolBarTitle: function () {
        return toolBarTitle;
    },
    emitChange: function (eventType) {
        this.emit(eventType);
    },
    addChangeListener: function (event, callback) {
        this.on(event, callback);
    },
    removeChangeListener: function (event, callback) {
        this.removeListener(event, callback);
    },
    events: {
        change_toolbar: "change_toolbar",
        current_operator:"current_operator"
    }
    //login: function(username, password) {
    //    ResourceUtils.AUTH.POST({
    //        username: username,
    //        password: password
    //    },
    //    null,
    //    function(json) {
    //        store("access_token", json.token);
    //        this.emitLogin();
    //    }.bind(this),
    //    function(json) {
    //        this.emitLoginFailed();
    //    }.bind(this));
    //},
    //
    //
    //
    //emitChange: function() {
    //    this.emit("CHANGE");
    //},
    //
    //addChangeListener: function(callback) {
    //    this.on("CHANGE", callback);
    //},
    //
    //removeChangeListener: function(callback) {
    //    this.removeListener("CHANGE", callback);
    //},
    //
    //emitLogout: function() {
    //    this.emit("LOGOUT");
    //},
    //
    //addLogoutListener: function(callback) {
    //    this.on("LOGOUT", callback);
    //},
    //
    //removeLogoutListener: function(callback) {
    //    this.removeListener("LOGOUT", callback);
    //},
    //
    //emitLoginFailed: function() {
    //    this.emit("LOGINFAILED");
    //},
    //
    //addLoginFailedListener: function(callback) {
    //    this.on("LOGINFAILED", callback);
    //},
    //
    //removeLoginFailedListener: function(callback) {
    //    this.removeListener("LOGINFAILED", callback);
    //},
    //
    //emitLogin: function() {
    //    this.emit("LOGIN");
    //},
    //
    //addLoginListener: function(callback) {
    //    this.on("LOGIN", callback);
    //},
    //
    //removeLoginListener: function(callback) {
    //    this.removeListener("LOGIN", callback);
    //},
    //
    //emitInit: function(resouce) {
    //    var isFinished = true;
    //    resources[resouce] = true;
    //    for(var resouce in resources) {
    //        isFinished = resources[resouce] && isFinished ? true : false;
    //    }
    //    if(isFinished) {
    //        isInited = true;
    //        this.emit("INIT");
    //    }
    //},
    //
    //addInitListener: function(callback) {
    //    this.on("INIT", callback);
    //},
    //
    //removeInitListener: function(callback) {
    //    this.removeListener("INIT", callback);
    //}

});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeToolBar:
            AppStore.changeToolBar(action.id, action.object,action.title);
            break;
        case MonitorConstants.SaveOperator:
            AppStore.setOperator(action.id, action.text);
            break;
        default:
            break;
    }
});

module.exports = AppStore;
