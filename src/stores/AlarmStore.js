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

var alarmMessage = [];
var AlarmStore = assign({}, EventEmitter.prototype, {
    getAlarmMessageList: function (type, page) {
        ResourceUtils.ALARM_MESSAEGE_LIST.GET({}, function (json) {
            alarmMessage = json;
            AlarmStore.emitChange(AlarmStore.events.ChangeAlarmMessageList);
        });
    },
    getAlarmMessageData: function () {
        return alarmMessage;
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
        ChangeAlarmMessageList: "ChangeAlarmMessageList"
    }
});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeAlarmMessageList:
            AlarmStore.getAlarmMessageList();
            break;
        default:
            break;
    }
});

module.exports = AlarmStore;