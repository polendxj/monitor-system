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

var vcenterList = [];
var hypervisorList = [];
var vmList = [];
var graphItemList = [];
var vcenterTips = [];

var hypervisorTips = [];
var hypervisorIDS = [];
var hypervisorID = "";

var vmTips = [];
var vmIDS = [];
var vmID = "";

var vcenterFilter = "";
var hypervisorFilter = "";
var vmsFilter = "";

var graphTemplateList = [];
var editVcenter = {};
var configDatas = [];
var historyDataList = [];
var curConfigDataType = "";
var VirtualMonitorStore = assign({}, EventEmitter.prototype, {
    getVCenterList: function () {
        ResourceUtils.VCENTER_LIST.GET("", function (json) {
            vcenterList = json;
            vcenterTips.splice(0);
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
    getHypervisorTip: function (text) {
        ResourceUtils.HYPERVISOR_LIST.GET({
            page: 0,
            pageSize: 10,
            interfaceIp: "",
            ip: text
        }, function (json) {
            hypervisorTips.splice(0);
            hypervisorIDS.splice(0);
            json.content.forEach(function (item) {
                hypervisorTips.push(item.name);
                hypervisorIDS.push({hostid: item.hostid, host: item.host});
            });
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeHypervisorTip);
        });
    },
    getHypervisorTipData: function () {
        return hypervisorTips;
    },
    setHyperVisorID: function (idx) {
        hypervisorID = hypervisorIDS[idx];
    },
    getHypervisorID: function () {
        return hypervisorID;
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
    getVMSTip: function (text) {
        ResourceUtils.VM_LIST.GET({
            page: 0,
            pageSize: 10,
            interfaceIp: "",
            ip: text
        }, function (json) {
            vmTips.splice(0);
            vmIDS.splice(0);
            json.content.forEach(function (item) {
                vmTips.push(item.name);
                vmIDS.push({hostid: item.hostid, host: item.host});
            });
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVMSTip);
        });
    },
    getVMSTipData: function () {
        return vmTips;
    },
    setVMID: function (idx) {
        vmID = vmIDS[idx];
    },
    getVMID: function () {
        return vmID;
    },
    getFilter: function () {
        return {
            vcenterFilter: vcenterFilter,
            hypervisorFilter: hypervisorFilter,
            vmsFilter: vmsFilter
        }
    },
    setHypervisorData: function (hostid, host) {
        hypervisorID = {hostid: hostid, host: host};
        VirtualMonitorStore.emitChange(VirtualMonitorStore.events.StartChartsRender);
    },
    clearID: function () {
        hypervisorID = "";
        vmID = "";
    },
    getGraphTemplateList: function (type) {
        ResourceUtils.GRAPHTEMPLATE_LIST.GET(type, function (json) {
            graphTemplateList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeGraphTemplateList);
        });
    },
    getGraphItemList: function (idString) {
        ResourceUtils.GRAPHITEM_LIST.GET2(idString, "", function (json) {
            graphItemList = json;
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeGraphItemList);
        });
    },
    getHistoryDataList: function (id, obj) {
        historyDataList.splice(0);
        for (var i = 0; i < obj.length; i++) {
            console.log(obj.length);
            (function (arg) {
                ResourceUtils.HISTORYDATA_LIST.POST2(id, obj[arg], "", function (json) {
                    historyDataList[arg] = json;
                    VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeHistoryDataList);
                }, function (resp) {
                    console.log(resp);
                    if (resp.status == 200) {

                    } else if (resp.status >= 300) {
                        alert(resp.responseJSON.message);
                    }
                });
            })(i);
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
    createGraphTemplate: function (obj) {
        ResourceUtils.GRAPHTEMPLATE_CREATE.POST(obj, "", function () {

        }, function (resp) {
            console.log(resp);
            if (resp.status == 200) {
                createFlag = true;
                /*MenuAction.changeBreadcrumb(4, AppStore.getOperator());*/
                VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeGraphTemplateList);
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    createGraphItem: function (obj) {
        ResourceUtils.GRAPHITEM_CREATE.POST(obj, "", function () {

        }, function (resp) {
            console.log(resp);
            if (resp.status == 200) {
                createFlag = true;
                VirtualMonitorStore.getGraphItemList(obj.templateId + "/graphs");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    deleteVCenter: function (id) {
        ResourceUtils.VCENTER_DELETE.DELETE(id, function (resp) {
            console.log("aa");
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeVCenterList);
        }, "", function (resp) {
            if (resp.status == 200) {
                VirtualMonitorStore.getVCenterList();
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    deleteGraphTemplate: function (id) {
        ResourceUtils.GRAPHTEMPLATE_DELETE.DELETE(id, function (resp) {
            console.log("aa");
        }, "", function (resp) {
            if (resp.status == 200) {

            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    deleteGraphItem: function (id, templateId) {
        ResourceUtils.GRAPHITEM_DELETE.DELETE(id, function (resp) {
            console.log("aa");
        }, "", function (resp) {
            if (resp.status == 200) {
                VirtualMonitorStore.getGraphItemList(templateId + "/graphs");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    updateVCenter: function (id, obj) {
        ResourceUtils.VCENTER_UPDATE.PUT2(id, obj, "", function (resp) {

        }, function (resp) {
            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    updateGraphTemplate: function (id, obj) {
        ResourceUtils.GRAPHTEMPLATE_UPDATE.PUT2(id, obj, "", function (resp) {
            console.log("aa");
        }, function (resp) {
            if (resp.status == 200) {

            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    getConfigDataList: function (type) {
        curConfigDataType = type;
        ResourceUtils.MONITOR_ITEMS_LIST.GET2(type + "/items", "", function (resp) {
            configDatas[0] = resp;
            ResourceUtils.TRIGGERS_LIST.GET2(type, "", function (resp2) {
                configDatas[1] = resp2;
                VirtualMonitorStore.emitChange(VirtualMonitorStore.events.ChangeConfigData);
            });
        });

    },
    saveMonitorItemRefresh: function (itemid, value) {
        ResourceUtils.UPDATE_MONITOR_ITEMS.PUT2(itemid, "", {delay: value}, function (resp) {
            console.log("aa");
        }, function (resp) {
            if (resp.status == 200) {
                alert("监控项刷新频率设置成功");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    saveAlarmLine: function (triggerid, obj, status) {
        ResourceUtils.TRIGGERS_LIST.PUT2(triggerid, obj, {status: status}, function (resp) {
            console.log("aa");
        }, function (resp) {
            if (resp.status == 200) {
                alert("告警阈值设置成功");
                VirtualMonitorStore.getConfigDataList(curConfigDataType);
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    getConfigData: function () {
        return configDatas;
    },
    getEditVcenterData: function () {
        return editVcenter;
    },
    setEditVcenterData: function (obj) {
        editVcenter['id'] = obj.hostid;
        editVcenter['name'] = obj.name;
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
    getHistoryData: function () {
        return historyDataList;
    },
    clearHistoryData: function () {
        historyDataList.splice(0);
    },
    getGraphTemplateListData: function () {
        return graphTemplateList;
    },
    getGraphItemListData: function () {
        return graphItemList;
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
        ChangeGraphTemplateList: "ChangeGraphTemplateList",
        ChangeGraphItemList: "ChangeGraphItemList",
        ChangeHistoryDataList: "ChangeHistoryDataList",
        ChangeConfigData: "ChangeConfigData",
        ChangeHypervisorTip: "ChangeHypervisorTip",
        StartChartsRender: "StartChartsRender",
        ChangeMysqlList: "ChangeMysqlList",
        ChangeVMSTip: "ChangeVMSTip",
        StartPullHistoryData: "StatPullHistoryData"
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
        case MonitorConstants.GetGraphItemList:
            VirtualMonitorStore.getGraphItemList(action.idString);
            break;
        case MonitorConstants.GetHistoryDataList:
            VirtualMonitorStore.getHistoryDataList(action.id, action.obj);
            break;
        case MonitorConstants.CreateVCenter:
            VirtualMonitorStore.createVCenter(action.jsonObject);
            break;
        case MonitorConstants.CreateGraphTemplate:
            VirtualMonitorStore.createGraphTemplate(action.jsonObject);
            break;
        case MonitorConstants.CreateGraphItem:
            VirtualMonitorStore.createGraphItem(action.jsonObject);
            break;
        case MonitorConstants.DeleteVCenter:
            VirtualMonitorStore.deleteVCenter(action.id);
            break;
        case MonitorConstants.DeleteGraphTemplate:
            VirtualMonitorStore.deleteGraphTemplate(action.id);
            break;
        case MonitorConstants.DeleteGraphItem:
            VirtualMonitorStore.deleteGraphItem(action.id, action.templateId);
            break;
        case MonitorConstants.UpdateVCenter:
            VirtualMonitorStore.updateVCenter(action.id, action.jsonObject);
            break;
        case MonitorConstants.UpdateGraphTemplate:
            VirtualMonitorStore.updateGraphTemplate(action.id, action.jsonObject);
            break;
        case MonitorConstants.GetVCenterTip:
            VirtualMonitorStore.getVCenterTip();
            break;
        case MonitorConstants.GetHypervisorTip:
            VirtualMonitorStore.getHypervisorTip(action.text);
            break;
        case MonitorConstants.GetVMSTip:
            VirtualMonitorStore.getVMSTip(action.text);
            break;
        case MonitorConstants.GetConfigData:
            VirtualMonitorStore.getConfigDataList(action.type);
            break;
        case MonitorConstants.SaveMonitorItemRefresh:
            VirtualMonitorStore.saveMonitorItemRefresh(action.itemid, action.value);
            break;
        case MonitorConstants.AlarmLineSet:
            VirtualMonitorStore.saveAlarmLine(action.triggerid, action.obj, action.status);
            break;
        case MonitorConstants.StartChartsRender:
            VirtualMonitorStore.emitChange(VirtualMonitorStore.events.StartChartsRender);
            break;
        case MonitorConstants.SetHypervisorData:
            VirtualMonitorStore.setHypervisorData(action.hostid, action.host);
            break;
        default:
            break;
    }
});

module.exports = VirtualMonitorStore;