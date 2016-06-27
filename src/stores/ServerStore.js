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

var linuxList = [];

var linuxTips = [];
var linuxIDS = [];
var linuxID = "";


var linuxFilter = "";
var ServerStore = assign({}, EventEmitter.prototype, {
    getLinuxList: function (ip, type, page) {
        linuxFilter = ip;
        ResourceUtils.SERVER_LIST.GET({
            ip: ip,
            type: type,
            page: page,
            pageSize: 10
        }, function (json) {
            linuxList = json;
            ServerStore.emitChange(ServerStore.events.ChangeLinuxList);
        });
    },
    getLinuxData: function () {
        return linuxList;
    },
    getLinuxTip: function (type, text) {
        ResourceUtils.SERVER_LIST.GET({
            type: type,
            page: 0,
            pageSize: 10,
            ip: text
        }, function (json) {
            linuxTips.splice(0);
            json.content.forEach(function (item) {
                linuxTips.push(item.host.substr(item.host.lastIndexOf('_') + 1));
                linuxIDS.push(item.hostid);
            });
            ServerStore.emitChange(ServerStore.events.ChangeLinuxTip);
        });
    },
    createLinux: function (obj) {
        ResourceUtils.SERVER_CREATE.POST(obj, "", function () {

        }, function (resp) {

            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    deleteLinux: function (id,ip, type, page) {
        ResourceUtils.SERVER_DELETE.DELETE(id, function (resp) {

        }, "", function (resp) {
            if (resp.status == 200) {
                if (type == "linux") {
                    ServerStore.getLinuxList(ip, type, page);
                }
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    getLinuxTipData: function () {
        return linuxTips;
    },
    setLinuxID: function (idx) {
        linuxID = linuxIDS[idx];
    },
    getLinuxID: function () {
        return linuxID;
    },
    getFilter: function () {
        return {
            linuxFilter: linuxFilter
        }
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
        ChangeLinuxList:"ChangeLinuxList",
        ChangeLinuxTip:"ChangeLinuxTip"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeLinuxList:
            ServerStore.getLinuxList(action.ip, action.type, action.page);
            break;
        case MonitorConstants.CreateLinux:
            ServerStore.createLinux(action.jsonObject);
            break;
        case MonitorConstants.DeleteLinux:
            ServerStore.deleteLinux(action.id,action.ip, action.type, action.page);
            break;
        default:
            break;
    }
});

module.exports = ServerStore;