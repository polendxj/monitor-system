/**
 * Created by jingpeng on 16/6/20.
 */
var React = require("react");
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var MonitorConstants = require('../constants/MonitorConstants');
var ResourceUtils = require('./ResourceUtils.js');
var store = require('store2');
var jQuery = require('jquery');

var vcenterList = [];
var VirtualMonitorStore = assign({}, EventEmitter.prototype, {
    getVCenterList: function () {
        ResourceUtils.VCENTER_LIST.GET("", function (json) {
            vcenterList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
        });
    },
    getVCenterListData: function () {
        return vcenterList;
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
        ChangeVCenterList: "ChangeVCenterList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.GetVCenterList:
            VirtualMonitorStore.getVCenterList();
            break;
        default:
            break;
    }
});

module.exports = VirtualMonitorStore;