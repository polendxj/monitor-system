var keyMirror = require('keymirror');

var MonitorConstants = keyMirror({
    ChangeToolBar: null,
    ChangeMenus: null,
    ChangeFirstMenus: null,
    SaveOperator: null,
    ChangeBreadcrumb: null,
    ChangeViews: null,
    GetVCenterList: null,
    GetVCenterTip: null,
    GetHypervisorList: null,
    GetGraphItemList: null,
    GetVmList: null,
    GetHistoryDataList: null,
    CreateVCenter: null,
    CreateMySql: null,
    CreateGraphTemplate: null,
    CreateGraphItem: null,
    DeleteVCenter: null,
    DeleteGraphItem: null,
    UpdateVCenter: null,
    UpdateGraphTemplate: null,
    DeleteGraphTemplate: null,
    GetGraphTemplateList: null,
    GetConfigData: null,
    SaveMonitorItemRefresh: null,
    AlarmLineSet: null,
    GetHypervisorTip: null,
    StartChartsRender:null
});

module.exports = MonitorConstants;
