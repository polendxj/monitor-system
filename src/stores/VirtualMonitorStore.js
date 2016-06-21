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
var AppStore = require('../stores/AppStore');

var vcenterList = [];
var hypervisorList = [];
var vmList = [];
var vcenterTips = [];

var vcenterFilter = "";
var hypervisorFilter = "";
var vmsFilter = "";
var graphTemplateList = [];
var editVcenter={};
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
    getGraphTemplateList: function (type) {
        ResourceUtils.GRAPHTEMPLATE_LIST.GET(type, function (json) {
            graphTemplateList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeGraphTemplateList);
        });
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
    createMySql: function (obj) {
        ResourceUtils.MYSQL_CREATE.POST(obj,"", function () {

        },function(resp){
            console.log(resp);
            if(resp.status==200){
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/dbList");
            }else if(resp.status>=300){
                alert(resp.responseJSON.message);
            }
        });
    },
    createGraphTemplate: function (obj) {
        ResourceUtils.GRAPHTEMPLATE_CREATE.POST(obj,"", function () {

        },function(resp){
            console.log(resp);
            if(resp.status==200){
                MenuAction.changeBreadcrumb(4, AppStore.getOperator());
            }else if(resp.status>=300){
                alert(resp.responseJSON.message);
            }
        });
    },
    deleteVCenter: function (id) {
        ResourceUtils.VCENTER_DELETE.DELETE(id, function (resp) {
            console.log("aa");
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
        },"",function (resp) {
                if(resp.status==200){
                    VirtualMonitorStore.getVCenterList();
                    VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
                }else if(resp.status>=300){
                    alert(resp.responseJSON.message);
                }
        })
    },
    deleteGraphTemplate: function (id) {
        ResourceUtils.GRAPHTEMPLATE_DELETE.DELETE(id, function (resp) {
            console.log("aa");
        },"",function (resp) {
            if(resp.status==200){
                MenuAction.changeBreadcrumb(4, AppStore.getOperator());
            }else if(resp.status>=300){
                alert(resp.responseJSON.message);
            }
        })
    },
    updateVCenter: function (id,obj) {
        ResourceUtils.VCENTER_UPDATE.PUT(id, obj, function (resp) {
            console.log("aa");
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
        },function (resp) {
            if(resp.status==200){
                VirtualMonitorStore.getVCenterList();
                VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
            }else if(resp.status>=300){
                alert(resp.responseJSON.message);
            }
        })
    },
    updateGraphTemplate: function (id,obj) {
        ResourceUtils.GRAPHTEMPLATE_UPDATE.PUT2(id, obj,"", function (resp) {
            console.log("aa");
        },function (resp) {
            if(resp.status==200){
                MenuAction.changeBreadcrumb(4, AppStore.getOperator());
            }else if(resp.status>=300){
                alert(resp.responseJSON.message);
            }
        })
    },
    getEditVcenterData: function () {
        return editVcenter;
    },
    setEditVcenterData: function (obj) {
        editVcenter['id']=obj.hostid;
        editVcenter['name']=obj.name;
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
    getGraphTemplateListData: function () {
        return graphTemplateList;
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
        ChangeVCenterTip: "ChangeVCenterTip",
        ChangeGraphTemplateList:"ChangeGraphTemplateList"
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
        case MonitorConstants.GetGraphTemplateList:
            VirtualMonitorStore.getGraphTemplateList(action.type);
            break;
        case MonitorConstants.GetVmList:
            VirtualMonitorStore.getVmList(action.page, action.interfaceIp, action.ip);
            break;
        case MonitorConstants.CreateVCenter:
            VirtualMonitorStore.createVCenter(action.jsonObject);
            break;
        case MonitorConstants.CreateGraphTemplate:
            VirtualMonitorStore.createGraphTemplate(action.jsonObject);
            break;
        case MonitorConstants.DeleteVCenter:
            VirtualMonitorStore.deleteVCenter(action.id);
            break;
        case MonitorConstants.DeleteGraphTemplate:
            VirtualMonitorStore.deleteGraphTemplate(action.id);
            break;
        case MonitorConstants.UpdateVCenter:
            VirtualMonitorStore.updateVCenter(action.id,action.jsonObject);
            break;
        case MonitorConstants.UpdateGraphTemplate:
            VirtualMonitorStore.updateGraphTemplate(action.id,action.jsonObject);
            break;
        case MonitorConstants.GetVCenterTip:
            VirtualMonitorStore.getVCenterTip();
            break;
        default:
            break;
    }
});

module.exports = VirtualMonitorStore;