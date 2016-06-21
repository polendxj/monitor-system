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
    CreateVCenter:null
});

module.exports = MonitorConstants;
