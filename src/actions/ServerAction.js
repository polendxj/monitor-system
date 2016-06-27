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
    },
    createLinux: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateLinux,
            jsonObject: obj
        })
    },
    deleteLinux: function (id,ip, type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteLinux,
            id: id,
            ip: ip,
            type: type,
            page: page
        })
    }
};

module.exports = ServerAction;
