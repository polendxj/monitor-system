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
    },
    getSqlserverList: function (type, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeSqlserverList,
            type: type,
            page: page
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
            type:type,
            page:page
        })
    }
};

module.exports = DatabasesAction;
