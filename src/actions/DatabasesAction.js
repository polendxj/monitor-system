var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var DatabasesAction = {
    getMysqlList: function (type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeMysqlList,
            type: type,
            page: page
        })
    }
};

module.exports = DatabasesAction;
