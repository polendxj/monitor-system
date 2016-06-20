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
var store = require('store2');
var jQuery = require('jquery');

var MenuAction = require('../actions/MenuAction');

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
        ResourceUtils.HYPERVISOR_LIST.GET("", function (json) {
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
    createVCenter: function (obj) {
        ResourceUtils.VCENTER_CREATE.POST(obj,"", function () {

        },function(resp){
            console.log(resp);
            if(resp.status==200){
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            }else if(resp.status>=300){
                alert(resp.responseJSON.message);
            }
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
        case MonitorConstants.CreateVCenter:
            VirtualMonitorStore.createVCenter(action.jsonObject);
            break;
        default:
            break;
    }
});

module.exports = VirtualMonitorStore;