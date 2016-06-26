/**
 * Created by jingpeng on 16/6/20.
 */
var React = require("react");
var browserHistory = require('react-router').browserHistory;
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var MonitorConstants = require('../constants/MonitorConstants');
var ResourceUtils = require('./ResourceUtils.js');
var MenuStore = require('../stores/MenuStore');
var store = require('store2');
var jQuery = require('jquery');

var MenuAction = require('../actions/MenuAction');
var AppStore = require('../stores/AppStore');

var users = [];
var UsersStore = assign({}, EventEmitter.prototype, {
    getUserList: function (name, page) {
        ResourceUtils.USERS_LIST.GET({
            name: name,
            page: page,
            pageSize: 10
        }, function (json) {
            users = json;
            UsersStore.emitChange(UsersStore.events.ChangeUsersList);
        });
    },
    getUsersData: function () {
        return users;
    },
    emitChange: function (eventType) {
        this.emit(eventType);
    },
    addChangeListener: function (event, callback) {
        this.on(event, callback);
    },
    removeChangeListener: function (event, callback) {
        this.removeListener(event, callback);
    },
    events: {
        ChangeUsersList: "ChangeUsersList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeUsersList:
            UsersStore.getUserList(action.name, action.page);
            break;
        default:
            break;
    }
});

module.exports = UsersStore;