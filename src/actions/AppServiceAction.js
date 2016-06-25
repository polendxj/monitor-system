var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var AppServiceAction = {
    getApacheList: function (type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeApacheList,
            type: type,
            page: page
        })
    },
    getNginxList: function (type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeNginxList,
            type: type,
            page: page
        })
    }
};

module.exports = AppServiceAction;
