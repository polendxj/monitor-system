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
    },
    createUser: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateUser,
            jsonObject: obj
        })
    },
    updateUser: function (id,obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.UpdateUser,
            id:id,
            jsonObject: obj
        })
    },
    deleteUser: function (id,obj, name, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteUser,
            id: id,
            jsonObject: obj,
            name:name,
            page:page
        })
    }
};

module.exports = UsersAction;
