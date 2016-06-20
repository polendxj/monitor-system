var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var VirtualMonitorAction = {
    getVCenterList: function () {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetVCenterList
        })
    }
};

module.exports = VirtualMonitorAction;
