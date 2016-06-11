/**
 * Created by Captain on 2016/6/7.
 */
var React = require("react");
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var MonitorConstants = require('../constants/MonitorConstants');
var store = require('store2');
var jQuery = require('jquery');


var firstMenus = [];
var subMenus = {
    parentIdx:"",
    subMenus:""
};

var MenuStore = assign({}, EventEmitter.prototype, {
    changeMenus: function (tools) {
        firstMenus =tools;
        this.emitChange(this.events.change_menus);
    },
    changeFirstMenus: function (idx,tools) {
        subMenus.parentIdx = idx;
        subMenus.subMenus =tools.secondLayer;
        this.emitChange(this.events.change_firstMenus);
    },
    getSubMenus: function () {
        return subMenus;
    },
    getFirstMenus: function () {
        return firstMenus.firstLayer;
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
        change_menus: "change_menus",
        change_firstMenus:"change_firstMenus"
    }

});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeMenus:
            MenuStore.changeMenus(action.firstMenus);
            break;
        case MonitorConstants.ChangeFirstMenus:
            MenuStore.changeFirstMenus(action.idx,action.subMenus);
            break;
        default:
            break;
    }
});

module.exports = MenuStore;
