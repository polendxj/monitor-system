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
    MYSQL_CREATE:"/oms/mysql",
    GRAPHTEMPLATE_CREATE:"/oms/graphTemplate",
    GRAPHITEM_CREATE:"/oms/graph",
    VCENTER_DELETE:"/oms/vcenter/",
    GRAPHTEMPLATE_DELETE:"/oms/graphTemplate/",
    GRAPHITEM_DELETE:"/oms/graph/",
    VCENTER_UPDATE:"/oms/vcenter/",
    GRAPHTEMPLATE_UPDATE:"/oms/graphTemplate/"
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
