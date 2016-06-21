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
    createVCenter: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateVCenter,
            jsonObject: obj
        })
    }
};

module.exports = VirtualMonitorAction;
