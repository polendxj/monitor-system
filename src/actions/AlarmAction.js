var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var AlarmAction = {
    getAlarmMessageList: function (type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeAlarmMessageList
        })
    }
};

module.exports = AlarmAction;
