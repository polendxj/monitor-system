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
var breadcrumbData = {
    firstID: '',
    secondID: '',
    thirdID: '',
    fourthID: '',
    firstMenuName: "",
    secondMenuName: "",
    thirdMenuName: "",
    fourthMenuName:''
};
var subMenus = {
    parentIdx: "",
    subMenus: ""
};

var MenuStore = assign({}, EventEmitter.prototype, {
    changeMenus: function (tools) {
        firstMenus = tools;
        this.emitChange(this.events.change_menus);
    },
    changeFirstMenus: function (idx, tools) {
        subMenus.parentIdx = idx;
        subMenus.subMenus = tools.secondLayer;
/*        breadcrumbData.firstMenuName = firstMenus.name;
        breadcrumbData.secondMenuName = tools.name;
        breadcrumbData.firstID = firstMenus.id;
        breadcrumbData.secondID = tools.id;*/
        this.emitChange(this.events.change_firstMenus);
    },
    changeBreadcrumb: function (level, data) {
        if (level == 'first') {
            breadcrumbData.firstID = data.id;
            breadcrumbData.firstMenuName = data.name;
        } else if (level == 'second') {
            breadcrumbData.secondID = data.id;
            breadcrumbData.secondMenuName = data.name;
        } else if (level == 'third'){
            breadcrumbData.thirdID = data.id;
            breadcrumbData.thirdMenuName = data.name;
            breadcrumbData.fourthID = '';
            breadcrumbData.fourthMenuName = '';
        }else{
            breadcrumbData.fourthID = data.id;
            breadcrumbData.fourthMenuName = data.name;
        }
        this.emitChange(this.events.change_breadcrumb);
    },
    getSubMenus: function () {
        return subMenus;
    },
    getFirstMenus: function () {
        return firstMenus.firstLayer;
    },
    getBreadcrumbData: function () {
        return breadcrumbData;
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
        change_firstMenus: "change_firstMenus",
        change_breadcrumb:"change_breadcrumb"
    }

});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeMenus:
            MenuStore.changeMenus(action.firstMenus);
            break;
        case MonitorConstants.ChangeFirstMenus:
            MenuStore.changeFirstMenus(action.idx, action.subMenus);
            break;
        case MonitorConstants.ChangeBreadcrumb:
            MenuStore.changeBreadcrumb(action.level,action.breadcrumbData);
            break;
        default:
            break;
    }
});

module.exports = MenuStore;
