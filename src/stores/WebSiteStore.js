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

var httpList = [];
var WebSiteStore = assign({}, EventEmitter.prototype, {
    getHttpList: function (url, page) {
        ResourceUtils.WEB_SITE_LIST.GET({
            url:url,
            page: page,
            pageSize: 10
        }, function (json) {
            httpList = json;
            WebSiteStore.emitChange(WebSiteStore.events.ChangeHttpList);
        });
    },
    getHttpData: function () {
        return httpList;
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
        ChangeHttpList: "ChangeHttpList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeHttpList:
            WebSiteStore.getHttpList(action.url, action.page);
            break;
        default:
            break;
    }
});

module.exports = WebSiteStore;