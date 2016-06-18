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
var breadcrumbDataList = [];
var subMenus = {
    parentIdx: "",
    subMenus: ""
};
var viewData = "";

var MenuStore = assign({}, EventEmitter.prototype, {
    changeMenus: function (tools) {
        firstMenus = tools;
        this.emitChange(this.events.change_menus);
    },
    changeFirstMenus: function (idx, tools) {
        subMenus.parentIdx = idx;
        subMenus.subMenus = tools;
        this.emitChange(this.events.change_firstMenus);
    },
    changeBreadcrumb: function (level, data) {
        var breadcrumbData = {
            breadcrumbID: '',
            breadcrumbName: ''
        }
        breadcrumbData.breadcrumbID = data.id;
        breadcrumbData.breadcrumbName = data.name;
        breadcrumbDataList.splice(level - 1);
        if(data!=""){
            breadcrumbDataList.push(breadcrumbData);
        }
        this.emitChange(this.events.change_breadcrumb);
    },
    changeViews: function (data) {
        viewData = data;
        this.emitChange(this.events.change_views);
    },
    getViewData: function () {
        return viewData;
    },
    getSubMenus: function () {
        return subMenus;
    },
    getFirstMenus: function () {
        return firstMenus.firstLayer;
    },
    getBreadcrumbData: function () {
        return breadcrumbDataList;
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
        change_breadcrumb: "change_breadcrumb",
        change_views: "change_views"
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
            MenuStore.changeBreadcrumb(action.level, action.breadcrumbData);
            break;
        case MonitorConstants.ChangeViews:
            MenuStore.changeViews(action.viewData);
            break;
        default:
            break;
    }
});

module.exports = MenuStore;
