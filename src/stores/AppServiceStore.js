/**
 * Created by jingpeng on 16/6/20.
 */
var React = require("react");
var browserHistory = require('react-router').browserHistory;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var MonitorConstants = require('../constants/MonitorConstants');
var ResourceUtils = require('./ResourceUtils.js');
var MenuStore = require('../stores/MenuStore');
var store = require('store2');
var jQuery = require('jquery');

var MenuAction = require('../actions/MenuAction');
var AppStore = require('../stores/AppStore');

var apacheList = [];
var nginxList = [];

var apacheTips = [];
var apacheIDS = [];
var apacheID = "";

var nginxTips = [];
var nginxIDS = [];
var nginxID = "";

var apacheFilter = "";
var nginxFilter = "";
var AppServiceStore = assign({}, EventEmitter.prototype, {
    getApacheList: function (ip, type, page) {
        apacheFilter = ip;
        ResourceUtils.APP_SERVICELIST.GET({
            ip: ip,
            type: type,
            page: page,
            pageSize: 10
        }, function (json) {
            apacheList = json;
            AppServiceStore.emitChange(AppServiceStore.events.ChangeApacheList);
        });
    },
    getApacheListData: function () {
        return apacheList;
    },
    getApacheTip: function (type, text) {
        ResourceUtils.APP_SERVICELIST.GET({
            type: type,
            page: 0,
            pageSize: 10,
            ip: text
        }, function (json) {
            apacheTips.splice(0);
            json.content.forEach(function (item) {
                apacheTips.push(item.host.substr(item.host.lastIndexOf('_') + 1));
                apacheIDS.push({hostid: item.hostid, host: item.host});
            });
            AppServiceStore.emitChange(AppServiceStore.events.ChangeApacheTip);
        });
    },
    getApacheTipData: function () {
        return apacheTips;
    },
    setApacheID: function (idx) {
        apacheID = apacheIDS[idx];
    },
    getApacheID: function () {
        return apacheID;
    },
    getFilter: function () {
        return {
            apacheFilter: apacheFilter,
            nginxFilter: nginxFilter
        }
    },
    clearID: function () {
        apacheID = "";
        nginxID = "";
    },
    getNginxList: function (ip, type, page) {
        ResourceUtils.APP_SERVICELIST.GET({
            ip: ip,
            type: type,
            page: page,
            pageSize: 10
        }, function (json) {
            nginxList = json;
            AppServiceStore.emitChange(AppServiceStore.events.ChangeNginxList);
        })
    },
    getNginxListData: function () {
        return nginxList;
    },
    getNginxTip: function (type, text) {
        ResourceUtils.APP_SERVICELIST.GET({
            type: type,
            page: 0,
            pageSize: 10,
            ip: text
        }, function (json) {
            nginxTips.splice(0);
            json.content.forEach(function (item) {
                nginxTips.push(item.host.substr(item.host.lastIndexOf('_') + 1));
                nginxIDS.push({hostid: item.hostid, host: item.host});
            });
            AppServiceStore.emitChange(AppServiceStore.events.ChangeNginxTip);
        });
    },
    getNginxTipData: function () {
        return nginxTips;
    },
    setNginxID: function (idx) {
        nginxID = nginxIDS[idx];
    },
    getNginxID: function () {
        return nginxID;
    },
    createAppService: function (obj) {
        ResourceUtils.APP_SERVICE_CREATE.POST(obj, "", function () {

        }, function (resp) {

            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    deleteAppService: function (id, type, page) {
        ResourceUtils.APP_SERVICE_DELETE.DELETE(id, function (resp) {

        }, "", function (resp) {
            if (resp.status == 200) {
                if (type == "nginx") {
                    AppServiceStore.getNginxList(type, page);
                } else if (type == "apache") {
                    AppServiceStore.getApacheList(type, page);
                }
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
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
        ChangeMysqlList: "ChangeApacheList",
        ChangeSqlserverList: "ChangeNginxList",
        ChangeApacheTip: "ChangeApacheTip",
        ChangeNginxTip: "ChangeNginxTip"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeApacheList:
            AppServiceStore.getApacheList(action.ip, action.type, action.page);
            break;
        case MonitorConstants.ChangeNginxList:
            AppServiceStore.getNginxList(action.ip, action.type, action.page);
            break;
        case MonitorConstants.CreateAppService:
            AppServiceStore.createAppService(action.jsonObject);
            break;
        case MonitorConstants.DeleteAppService:
            AppServiceStore.deleteAppService(action.id, action.type, action.page);
            break;
        default:
            break;
    }
});

module.exports = AppServiceStore;