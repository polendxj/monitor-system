var assign = require('object-assign');

var MofaAPIRoot = config.URL.API;
var MofaAPIEndpoints = {
    VCENTER_LIST: "/oms/vcenters",
    HYPERVISOR_LIST:"/oms/hypervisors",
    VM_LIST:"/oms/vms",
    GRAPHTEMPLATE_LIST:"/oms/graphTemplates",
    GRAPHITEM_LIST:"/oms/",
    HISTORYDATA_LIST:"/oms/history/",
    VCENTER_CREATE:"/oms/vcenter",
    DATABASE_CREATE:"/oms/database",
    MYSQL_CREATE:"/oms/mysql",
    GRAPHTEMPLATE_CREATE:"/oms/graphTemplate",
    GRAPHITEM_CREATE:"/oms/graph",
    VCENTER_DELETE:"/oms/vcenter/",
    DATABASE_DELETE:"/oms/database/",
    GRAPHTEMPLATE_DELETE:"/oms/graphTemplate/",
    GRAPHITEM_DELETE:"/oms/graph/",
    VCENTER_UPDATE:"/oms/vcenter/",
    TRIGGERS_LIST:"/oms/trigger/",
    MONITOR_ITEMS_LIST:"/oms/template/",
    UPDATE_MONITOR_ITEMS:"/oms/items/",
    DATABASE_LIST:"/oms/databases/",
    APP_SERVICELIST:"/oms/apps/",
    APP_SERVICE_CREATE:"/oms/app",
    APP_SERVICE_DELETE:"/oms/app/",
    ALARM_MESSAEGE_LIST:"/oms/events/",
    WEB_SITE_LIST:"/oms/webs/"

};

var MomaAPIRoot = config.URL.AUTH;
var MomaAPIEndpoints = {
    ACCOUNT: "/usercenter/user",
    APPLICATION: "/api/applications2/",
    AUTH: "/usercenter/authorize",
    REGISTER: "/usercenter/user/",
    INVITE: "/usercenter/invite/",
    SCAN_SYS_NOTIFICATION:"/usercenter/message",
    READ_SYS_NOTIFICATION:"/usercenter/readmessage"

};
var PluginAPIRoot = config.URL.PLUGIN;
var PluginAPIEndpoints = {
    CREDIT: "/credit",
    PROXY: "/proxy"

};

for (var endpoint in MofaAPIEndpoints) {
    MofaAPIEndpoints[endpoint] = MofaAPIRoot + MofaAPIEndpoints[endpoint];
}
for (var endpoint in MomaAPIEndpoints) {
    MomaAPIEndpoints[endpoint] = MomaAPIRoot + MomaAPIEndpoints[endpoint];
}
for (var endpoint in PluginAPIEndpoints) {
    PluginAPIEndpoints[endpoint] = PluginAPIRoot + PluginAPIEndpoints[endpoint];
}
var LocalAPIEndpoints = {
    ORDERS: "orders.json",
};

var APIEndpoints = assign({}, MofaAPIEndpoints, MomaAPIEndpoints,PluginAPIEndpoints, LocalAPIEndpoints);

module.exports = APIEndpoints;
