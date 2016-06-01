var assign = require('object-assign');

var MofaAPIRoot = config.URL.API;
var MofaAPIEndpoints = {
    SEARCH: "/search/search/",
    USERS: "/search/search/",
    SCENE: "",
    FEATURES: "/features/",
    LABEL: "/label/",
    ENTITY: "/entity/",
    ATTRIBUTES: "/userlistconfig/",
    LIST: "/applications/default/saved_lists/",
    LISTGEN: "/listgenerate/",
    STAT: "/search/_analyze/",
    LIST_DEFINES: "/applications/default/saved_lists/",
    SINGLE_FEATURE: "/features/",
    CRITERIA: "/listdefine/",
    SEARCH_DATA: "/details/",
    EVENTS: "/event/",
    REMARK: "/remark/",
    SEARCH_IP_PROXY: "",
    SEARCH_FINANCE: ""
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
