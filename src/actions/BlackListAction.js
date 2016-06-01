/**
 * Created by jingpeng on 16/5/18.
 */
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var BlackListAction={
    searchIPProxy: function (ip) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.SEARCH_IP_PROXY,
            ip: ip
        });
    },
    searchFinance: function (attribute) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.SEARCH_FINANCE,
            attribute: attribute
        });
    }
};

module.exports=BlackListAction;