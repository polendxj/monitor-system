var React = require("react");
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var MonitorConstants = require('../constants/MonitorConstants');
var ToolBar = require('../components/common/ToolBar/ToolBar');
var store = require('store2');
var jQuery = require('jquery');

var allToolBar = [
    {
        id: 0,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"VCenter : "} defaultText={"请选择VCenter"}/>
        ]
    },
    {
        id: 1,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"VCenter : "} defaultText={"请选择VCenter"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入Hypervisor名称"} tip={"Hypervisor名称"}/>
        ]
    },
    {
        id: 2,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"VCenter : "} defaultText={"请选择VCenter"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入Hypervisor名称"} tip={"Hypervisor IP或名称"}/>,
            <ToolBar.Text key={"bar2"} placeholder={"请输入VM名称"} tip={"VM IP或名称"}/>
        ]
    },
    {
        id: 3,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"VCenter : "} defaultText={"请选择VCenter"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入Hypervisor名称"} tip={"Hypervisor IP或名称"}/>,
            <ToolBar.Text key={"bar2"} placeholder={"请输入VM名称"} tip={"VM IP或名称"}/>,
            <ToolBar.DropdownList key={"bar3"} prefixText={"监控项 : "} defaultText={"请选择监控项"}/>
        ]
    },
    {
        id: 4,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
            <ToolBar.DropdownList key={"bar2"} prefixText={"服务 : "} defaultText={"请选择应用服务"}/>
        ]
    },
    {
        id: 5,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
            <ToolBar.DropdownList key={"bar2"} prefixText={"服务 : "} defaultText={"请选择应用服务"}/>,
            <ToolBar.DropdownList key={"bar3"} prefixText={"监控项 : "} defaultText={"请选择监控项"}/>

        ]
    },
    {
        id: 6,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
            <ToolBar.DropdownList key={"bar2"} prefixText={"数据库 : "} defaultText={"请选择数据库"}/>

        ]
    },
    {
        id: 7,
        bar: [
            <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
            <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
            <ToolBar.DropdownList key={"bar2"} prefixText={"数据库 : "} defaultText={"请选择数据库"}/>,
            <ToolBar.DropdownLis key={"bar3"}t prefixText={"监控项 : "} defaultText={"请选择监控项"}/>

        ]
    }
];
var curToolBar = [];

var AppStore = assign({}, EventEmitter.prototype, {
    changeToolBar: function (id, object) {
        curToolBar = allToolBar.filter(function (value, key) {
            if (value.id == id) {
                return value;
            }
        });
        this.emitChange(this.events.change_toolbar);
    },
    getCurrentToolBar: function () {
        return curToolBar[0].bar;
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
        change_toolbar: "change_toolbar"
    }
    //login: function(username, password) {
    //    ResourceUtils.AUTH.POST({
    //        username: username,
    //        password: password
    //    },
    //    null,
    //    function(json) {
    //        store("access_token", json.token);
    //        this.emitLogin();
    //    }.bind(this),
    //    function(json) {
    //        this.emitLoginFailed();
    //    }.bind(this));
    //},
    //
    //
    //
    //emitChange: function() {
    //    this.emit("CHANGE");
    //},
    //
    //addChangeListener: function(callback) {
    //    this.on("CHANGE", callback);
    //},
    //
    //removeChangeListener: function(callback) {
    //    this.removeListener("CHANGE", callback);
    //},
    //
    //emitLogout: function() {
    //    this.emit("LOGOUT");
    //},
    //
    //addLogoutListener: function(callback) {
    //    this.on("LOGOUT", callback);
    //},
    //
    //removeLogoutListener: function(callback) {
    //    this.removeListener("LOGOUT", callback);
    //},
    //
    //emitLoginFailed: function() {
    //    this.emit("LOGINFAILED");
    //},
    //
    //addLoginFailedListener: function(callback) {
    //    this.on("LOGINFAILED", callback);
    //},
    //
    //removeLoginFailedListener: function(callback) {
    //    this.removeListener("LOGINFAILED", callback);
    //},
    //
    //emitLogin: function() {
    //    this.emit("LOGIN");
    //},
    //
    //addLoginListener: function(callback) {
    //    this.on("LOGIN", callback);
    //},
    //
    //removeLoginListener: function(callback) {
    //    this.removeListener("LOGIN", callback);
    //},
    //
    //emitInit: function(resouce) {
    //    var isFinished = true;
    //    resources[resouce] = true;
    //    for(var resouce in resources) {
    //        isFinished = resources[resouce] && isFinished ? true : false;
    //    }
    //    if(isFinished) {
    //        isInited = true;
    //        this.emit("INIT");
    //    }
    //},
    //
    //addInitListener: function(callback) {
    //    this.on("INIT", callback);
    //},
    //
    //removeInitListener: function(callback) {
    //    this.removeListener("INIT", callback);
    //}

});

AntiFraudDispatcher.register(function (action) {
    switch (action.actionType) {
        case MonitorConstants.ChangeToolBar:
            AppStore.changeToolBar(action.id, action.object);
            break;
        default:
            break;
    }
});

module.exports = AppStore;
