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

var mysqlTips = [];
var mysqlIDS = [];
var mysqlID = "";

var sqlserverTips = [];
var sqlserverIDS = [];
var sqlserverID = "";


var mysqlFilter = "";
var sqlserverFilter = "";

var DatabasesStore = assign({}, EventEmitter.prototype, {
    getMysqlList: function (ip, type, page) {
        mysqlFilter = ip;
        ResourceUtils.DATABASE_LIST.GET({
            ip: ip,
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
    getMysqlTip: function (type, text) {
        ResourceUtils.DATABASE_LIST.GET({
            type: type,
            page: 0,
            pageSize: 10,
            ip: text
        }, function (json) {
            mysqlTips.splice(0);
            console.log(item.host);
            json.content.forEach(function (item) {
                mysqlTips.push(item.host.substr(item.host.lastIndexOf('_') + 1));
                mysqlIDS.push({hostid: item.hostid, host: item.host});
            });
            DatabasesStore.emitChange(DatabasesStore.events.ChangeMysqlTip);
        });
    },
    getMysqlTipData: function () {
        return mysqlTips;
    },
    setMysqlID: function (idx) {
        mysqlID = mysqlIDS[idx];
    },
    getMysqlID: function () {
        return mysqlID;
    },
    getFilter: function () {
        return {
            mysqlFilter: mysqlFilter,
            sqlserverFilter: sqlserverFilter
        }
    },
    getSqlserverList: function (ip, type, page) {
        ResourceUtils.DATABASE_LIST.GET({
            ip: ip,
            type: type,
            page: page,
            pageSize: 10
        }, function (json) {
            sqlserverList = json;
            DatabasesStore.emitChange(DatabasesStore.events.ChangeSqlserverList);
        });
    },
    getSqlserverListData: function () {
        return sqlserverList;
    },
    getSqlserverTip: function (type, text) {
        ResourceUtils.DATABASE_LIST.GET({
            type: type,
            page: 0,
            pageSize: 10,
            ip: text
        }, function (json) {
            sqlserverTips.splice(0);
            json.content.forEach(function (item) {
                console.log(item.host);
                sqlserverTips.push(item.host.substr(item.host.lastIndexOf('_') + 1));
                sqlserverIDS.push({hostid: item.hostid, host: item.host});
            });
            DatabasesStore.emitChange(DatabasesStore.events.ChangeSqlserverTip);
        });
    },
    getSqlserverTipData: function () {
        return sqlserverTips;
    },
    setSqlserverID: function (idx) {
        sqlserverID = sqlserverIDS[idx];
    },
    getSqlserverID: function () {
        return sqlserverID;
    },
    clearID: function () {
        mysqlID = "";
        sqlserverID = "";
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
    deleteDatabase: function (id, type, page) {
        ResourceUtils.DATABASE_DELETE.DELETE(id, function (resp) {

        }, "", function (resp) {
            if (resp.status == 200) {
                if (type == "mysql") {
                    DatabasesStore.getMysqlList(type, page);
                } else if (type == "sqlserver") {
                    DatabasesStore.getSqlserverList(type, page);
                }
            } else if (resp.status >= 300) {
                alert(resp.responseJSON.message);
            }
        })
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
        ChangeSqlserverList: "ChangeSqlserverList",
        ChangeMysqlTip: "ChangeMysqlTip",
        ChangeSqlserverTip: "ChangeSqlserverTip"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeMysqlList:
            DatabasesStore.getMysqlList(action.ip, action.type, action.page);
            break;
        case MonitorConstants.GetMysqlTip:
            DatabasesStore.getMysqlTip(action.type, action.text);
            break;
        case MonitorConstants.ChangeSqlserverList:
            DatabasesStore.getSqlserverList(action.ip, action.type, action.page);
            break;
        case MonitorConstants.GetSqlserverTip:
            DatabasesStore.getMysqlTip(action.type, action.text);
            break;
        case MonitorConstants.CreateDatabase:
            DatabasesStore.createDatabase(action.jsonObject);
            break;
        case MonitorConstants.DeleteDatabase:
            DatabasesStore.deleteDatabase(action.id, action.type, action.page);
            break;
        default:
            break;
    }
});

module.exports = DatabasesStore;