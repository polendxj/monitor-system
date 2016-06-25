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

var mysqlList = [];
var sqlserverList = [];
var DatabasesStore = assign({}, EventEmitter.prototype, {
    getMysqlList: function (type, page) {
        ResourceUtils.DATABASE_LIST.GET({
            type: type,
            page: page,
            pageSize: 10
        }, function (json) {
            mysqlList = json;
            DatabasesStore.emitChange(DatabasesStore.events.ChangeMysqlList);
        });
    },
    getMysqListData: function () {
        return mysqlList;
    },
    getSqlserverList: function (type, page) {
        ResourceUtils.DATABASE_LIST.GET({
            type: type,
            page: page,
            pageSize: 10
        }, function (json) {
            sqlserverList = json;
            DatabasesStore.emitChange(DatabasesStore.events.ChangeSqlserverList);
        });
    },
    createDatabase: function (obj) {
        ResourceUtils.DATABASE_CREATE.POST(obj, "", function () {

        }, function (resp) {

            if (resp.status == 200) {
                MenuAction.changeBreadcrumb(4, "");
                browserHistory.push("/list");
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        });
    },
    deleteDatabase: function (id,type,page) {
        ResourceUtils.DATABASE_DELETE.DELETE(id, function (resp) {

        }, "", function (resp) {
            if (resp.status == 200) {
                if(type=="mysql"){
                    DatabasesStore.getMysqlList(type,page);
                }else if(type=="sqlserver"){
                    DatabasesStore.getSqlserverList(type,page);
                }
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
    },
    getSqlserverListData: function () {
        return sqlserverList;
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
        ChangeMysqlList: "ChangeMysqlList",
        ChangeSqlserverList: "ChangeSqlserverList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeMysqlList:
            DatabasesStore.getMysqlList(action.type,action.page);
            break;
        case MonitorConstants.ChangeSqlserverList:
            DatabasesStore.getSqlserverList(action.type,action.page);
            break;
        case MonitorConstants.CreateDatabase:
            DatabasesStore.createDatabase(action.jsonObject);
            break;
        case MonitorConstants.DeleteDatabase:
            DatabasesStore.deleteDatabase(action.id,action.type,action.page);
            break;
        default:
            break;
    }
});

module.exports = DatabasesStore;