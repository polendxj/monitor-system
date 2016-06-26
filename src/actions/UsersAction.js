var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var UsersAction = {
    getUsersList: function (name, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeUsersList,
            name:name,
            page:page

        })
    }
};

module.exports = UsersAction;
