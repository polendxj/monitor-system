var keyMirror = require('keymirror');

var MonitorConstants = keyMirror({
    ChangeToolBar: null,
    ChangeMenus:null,
    ChangeFirstMenus:null,
    SaveOperator:null,
    ChangeBreadcrumb:null,
    ChangeViews:null,
    GetVCenterList:null,
    GetVCenterTip:null,
    GetHypervisorList:null,
    GetVmList:null,
    CreateVCenter:null,
    CreateMySql:null,
    CreateGraphTemplate:null,
    DeleteVCenter:null,
    UpdateVCenter:null,
    UpdateGraphTemplate:null,
    DeleteGraphTemplate:null,
    GetGraphTemplateList:null
});

module.exports = MonitorConstants;
