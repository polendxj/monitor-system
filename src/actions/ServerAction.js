var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var ServerAction = {
    getLinuxList: function (ip, type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeLinuxList,
            type: type,
            page: page,
            ip: ip
        })
    }
};

module.exports = ServerAction;
