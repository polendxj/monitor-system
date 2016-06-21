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
            type:type
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
            jsonObject:obj
        })
    },
    createGraphTemplate: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateGraphTemplate,
            jsonObject:obj
        })
    },
    deleteVCenter: function (id) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteVCenter,
            id:id
        })
    },
    updateVCenter: function (id,obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.UpdateVCenter,
            id:id,
            jsonObject:obj
        })
    },
    deleteGraphTemplate: function (id) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteGraphTemplate,
            id:id
        })
    },

    updateGraphTemplate: function (id,obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.UpdateGraphTemplate,
            id:id,
            jsonObject:obj
        })
    }
};

module.exports = VirtualMonitorAction;
