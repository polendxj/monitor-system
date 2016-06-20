var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var VirtualMonitorAction = {
    getVCenterList: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetVCenterList
        })
    },
    getHypervisorList: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetHypervisorList
        })
    },
    getVmList: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetVmList
        })
    },
    createVCenter: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateVCenter,
            jsonObject:obj
        })
    }
};

module.exports = VirtualMonitorAction;
