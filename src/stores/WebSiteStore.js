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

var httpTips = [];
var httpIDS = [];
var httpID = "";

var httpFilter = "";
var WebSiteStore = assign({}, EventEmitter.prototype, {
    getHttpList: function (url, page) {
        httpFilter = url;
        ResourceUtils.WEB_SITE_LIST.GET({
            url: url,
            page: page,
            pageSize: 10
        }, function (json) {
            httpList = json;
            WebSiteStore.emitChange(WebSiteStore.events.ChangeHttpList);
        });
    },
    createHttp: function (obj) {
        ResourceUtils.WEB_SITE_CREATE.POST(obj, "", function () {

        }, function (resp) {

            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    getHttpTip: function (text) {
        ResourceUtils.WEB_SITE_LIST.GET({
            page: 0,
            pageSize: 10,
            url: text
        }, function (json) {
            httpTips.splice(0);
            json.content.forEach(function (item) {
                httpTips.push(item.host.substr(item.host.lastIndexOf('_') + 1));
                httpIDS.push({hostid: item.hostid, host: item.host});
            });
            WebSiteStore.emitChange(WebSiteStore.events.ChangeHttpTip);
        });
    },
    getHttpTipData: function () {
        return httpTips;
    },
    setHttpID: function (idx) {
        httpID = httpIDS[idx];
    },
    getHttpID: function () {
        return httpID;
    },
    getFilter: function () {
        return {
            httpFilter: httpFilter
        }
    },
    deleteHttp: function (id, url, page) {
        var body = {
            "name": "akka",
            "steps": [
                {
                    "name": "akka",
                    "url": "http://akka.io/",
                    "status_codes": 200,
                    "no": 1
                }
            ]
        };
        ResourceUtils.WEB_SITE_DELETE.DELETE(id, function (resp) {

        }, body, function (resp) {
            if (resp.status == 200) {
                WebSiteStore.getHttpList(url, page);
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    getHttpData: function () {
        return httpList;
    },
    clearID: function () {
        httpID = "";
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
        ChangeHttpList: "ChangeHttpList",
        ChangeHttpTip: "ChangeHttpTip"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeHttpList:
            WebSiteStore.getHttpList(action.url, action.page);
            break;
        case MonitorConstants.CreateHttp:
            WebSiteStore.createHttp(action.jsonObject);
            break;
        case MonitorConstants.DeleteHttp:
            WebSiteStore.deleteHttp(action.id, action.url, action.page);
            break;
        default:
            break;
    }
});

module.exports = WebSiteStore;