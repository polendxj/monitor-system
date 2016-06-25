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
var AppServiceStore = assign({}, EventEmitter.prototype, {
    getApacheList: function (type, page) {
        ResourceUtils.APP_SERVICELIST.GET({
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
    getNginxList: function (type, page) {
        ResourceUtils.APP_SERVICELIST.GET({
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
        ChangeSqlserverList: "ChangeNginxList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeApacheList:
            AppServiceStore.getApacheList(action.type, action.page);
            break;
        case MonitorConstants.ChangeNginxList:
            AppServiceStore.getNginxList(action.type, action.page);
            break;
        default:
            break;
    }
});

module.exports = AppServiceStore;