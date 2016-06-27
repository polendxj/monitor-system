var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var DatabasesAction = {
    getMysqlList: function (ip, type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeMysqlList,
            type: type,
            page: page,
            ip: ip
        })
    },
    getMysqlTip: function (type, text) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetMysqlTip,
            type: type,
            text: text
        })
    },
    getSqlserverList: function (ip, type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeSqlserverList,
            type: type,
            page: page,
            ip: ip
        })
    },
    getSqlserverTip: function (type, text) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.GetSqlserverTip,
            type: type,
            text: text
        })
    },
    createDatabase: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateDatabase,
            jsonObject: obj
        })
    },
    deleteDatabase: function (id, type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteDatabase,
            id: id,
            type: type,
            page: page
        })
    }
};

module.exports = DatabasesAction;
