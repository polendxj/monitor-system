var assign = require('object-assign');

var MofaAPIRoot = config.URL.API;
var MofaAPIEndpoints = {
    VCENTER_LIST: "/oms/vcenters",
    HYPERVISOR_LIST:"/oms/hypervisors",
    VM_LIST:"/oms/vms",
    VCENTER_CREATE:"/oms/vcenter",
    MYSQL_CREATE:"/oms/mysql",
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
