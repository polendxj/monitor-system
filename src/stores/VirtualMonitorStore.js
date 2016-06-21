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
var vcenterTips = [];

var vcenterFilter = "";
var hypervisorFilter = "";
var vmsFilter = "";

var VirtualMonitorStore = assign({}, EventEmitter.prototype, {
    getVCenterList: function () {
        ResourceUtils.VCENTER_LIST.GET("", function (json) {
            vcenterList = json;
            json.forEach(function (item) {
                vcenterTips.push(item.name);
            });
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterTip);

        });
    },
    getVCenterTip: function () {

    },
    getVCenterTipData: function () {
        return vcenterTips;
    },
    getHypervisorList: function (page, interfaceIp, ip) {
        vcenterFilter = interfaceIp;
        hypervisorFilter = ip;
        var vmsFilter = "";
        ResourceUtils.HYPERVISOR_LIST.GET({
            page: page,
            pageSize: 10,
            interfaceIp: interfaceIp,
            ip: ip
        }, function (json) {
            hypervisorList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeHypervisiorList);
        });
    },
    getVmList: function (page, interfaceIp, ip) {
        hypervisorFilter = interfaceIp;
        vmsFilter = ip;
        ResourceUtils.VM_LIST.GET({
            page: page,
            pageSize: 10,
            interfaceIp: interfaceIp,
            ip: ip
        }, function (json) {
            vmList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVmList);
        });
    },
    getFilter: function () {
        return {
            vcenterFilter: vcenterFilter,
            hypervisorFilter: hypervisorFilter,
            vmsFilter: vmsFilter
        }
    },
    createVCenter: function (obj) {
        ResourceUtils.VCENTER_CREATE.POST(obj, "", function () {

        }, function (resp) {
            console.log(resp);
            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
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
        ChangeVmList: "ChangeVmList",
        ChangeVCenterTip: "ChangeVCenterTip"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.GetVCenterList:
            VirtualMonitorStore.getVCenterList();
            break;
        case MonitorConstants.GetHypervisorList:
            VirtualMonitorStore.getHypervisorList(action.page, action.interfaceIp, action.ip);
            break;
        case MonitorConstants.GetVmList:
            VirtualMonitorStore.getVmList(action.page, action.interfaceIp, action.ip);
            break;
        case MonitorConstants.CreateVCenter:
            VirtualMonitorStore.createVCenter(action.jsonObject);
            break;
        case MonitorConstants.GetVCenterTip:
            VirtualMonitorStore.getVCenterTip();
            break;
        default:
            break;
    }
});

module.exports = VirtualMonitorStore;