var keyMirror = require('keymirror');

var MonitorConstants = keyMirror({
    ChangeToolBar: null,
    ChangeMenus:null,
    ChangeFirstMenus:null,
    SaveOperator:null,
    ChangeBreadcrumb:null,
    ChangeViews:null,
    GetVCenterList:null,
    GetHypervisorList:null,
    GetVmList:null,
    CreateVCenter:null,
    CreateMySql:null
});

module.exports = MonitorConstants;
