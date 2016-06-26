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
var editUser={};
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
    createUser: function (obj) {
        ResourceUtils.USER_CREATE.POST(obj, "", function () {

        }, function (resp) {

            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    updateUser: function (id,obj) {
        ResourceUtils.USER_UPDATE.PUT2(id, obj,"", function (resp) {

        }, function (resp) {
            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    deleteUser: function (id,obj,name,page) {
        ResourceUtils.USER_DELETE.DELETE(id, function (resp) {

        }, obj, function (resp) {
            if (resp.status == 200) {
                UsersStore.getUserList(name, page);
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    setEditUserData: function (obj) {
        editUser['userid'] = obj.userid;
        editUser['username'] = obj.name;
        editUser['type'] = obj.type;
    },
    getEditUserData: function () {
        return editUser;
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
        case MonitorConstants.CreateUser:
            UsersStore.createUser(action.jsonObject);
            break;
        case MonitorConstants.UpdateUser:
            UsersStore.updateUser(action.id,action.jsonObject);
            break;
        case MonitorConstants.DeleteUser:
            UsersStore.deleteUser(action.id,action.jsonObject,action.name,action.page);
            break;
        default:
            break;
    }
});

module.exports = UsersStore;