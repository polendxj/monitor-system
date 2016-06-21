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
var hypervisorList = [];
var vmList = [];
var VirtualMonitorStore = assign({}, EventEmitter.prototype, {
    getVCenterList: function () {
        ResourceUtils.VCENTER_LIST.GET("", function (json) {
            vcenterList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
        });
    },
    getHypervisorList: function () {
        ResourceUtils.HYPERVISOR_LIST.GET({interfaceIp:"",ip:""}, function (json) {
            hypervisorList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeHypervisiorList);
        });
    },
    getVmList: function () {
        ResourceUtils.VM_LIST.GET("", function (json) {
            vmList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVmList);
        });
    },
    getVCenterListData: function () {
        return vcenterList;
    },
    getHypervisorListData: function () {
        return hypervisorList;
    },
    getVmData: function () {
        return vmList;
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
        ChangeVCenterList: "ChangeVCenterList",
        ChangeHypervisiorList: "ChangeHypervisiorList",
        ChangeVmList:"ChangeVmList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.GetVCenterList:
            VirtualMonitorStore.getVCenterList();
            break;
        case MonitorConstants.GetHypervisorList:
            VirtualMonitorStore.getHypervisorList();
            break;
        default:
            break;
    }
});

module.exports = VirtualMonitorStore;