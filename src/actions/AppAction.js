var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var AppAction = {
    login: function(username, password) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.LOGIN,
            username: username,
            password: password
        });
    },
    logout: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.LOGOUT
        });
    },
    init: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.APP_INIT
        });
    },
    del: function(tid) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.APP_DEL,
            tid: tid
        });
    },
    add: function(payload) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.APP_ADD,
            payload: payload
        });
    },
    update: function(payload) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.APP_UPDATE,
            payload: payload
        });
    },
    entity: function(entity) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.APP_ENTITY,
            entity: entity
        });
    },
    changeApplication: function(tid) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.APPLICATION_CHANGE,
            tid: tid
        });
    },
    scanSysNotifications: function (tokenID) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.SCAN_SYS_NOTIFICATIONS,
            tokenID: tokenID
        });
    }
};

module.exports = AppAction;
