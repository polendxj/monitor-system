var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var VirtualMonitorAction = {
    getVCenterList: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetVCenterList
        })
    },
    getVCenterTip: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetVCenterTip
        })
    },
    getHypervisorList: function (page, interfaceIp, ip) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetHypervisorList,
            page: page,
            interfaceIp: interfaceIp,
            ip: ip
        })
    },
    getVmList: function (page, interfaceIp, ip) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetVmList,
            page: page,
            interfaceIp: interfaceIp,
            ip: ip
        })
    },
    getGraphTemplateList: function (type) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetGraphTemplateList,
            type: type
        })
    },
    getGraphItemList: function (idString) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetGraphItemList,
            idString: idString
        })
    },
    getHistoryDataList: function (id, obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetHistoryDataList,
            id: id,
            obj: obj
        })
    },
    createVCenter: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateVCenter,
            jsonObject: obj
        })
    },
    createMySql: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateMySql,
            jsonObject: obj
        })
    },
    createGraphTemplate: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateGraphTemplate,
            jsonObject: obj
        })
    },
    createGraphItem: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateGraphItem,
            jsonObject: obj
        })
    },
    deleteVCenter: function (id) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteVCenter,
            id: id
        })
    },
    updateVCenter: function (id, obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.UpdateVCenter,
            id: id,
            jsonObject: obj
        })
    },
    deleteGraphTemplate: function (id) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteGraphTemplate,
            id: id
        })
    },
    deleteGraphItem: function (id, templateId) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteGraphItem,
            id: id,
            templateId: templateId
        })
    },
    updateGraphTemplate: function (id, obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.UpdateGraphTemplate,
            id: id,
            jsonObject: obj
        })
    },
    getConfigData: function (type) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetConfigData,
            type: type
        })
    },
    saveConfigDataOfMonitorItemRefresh: function (itemid, value) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.SaveMonitorItemRefresh,
            itemid: itemid,
            value: value
        })
    },
    saveAlarmLine: function (triggerid,obj,status) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.AlarmLineSet,
            triggerid: triggerid,
            obj: obj,
            status: status
        })
    },
    getHypervisorTip: function (text) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetHypervisorTip,
            text: text
        })
    },
    startChartsRender: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.StartChartsRender
        })
    }
};

module.exports = VirtualMonitorAction;
