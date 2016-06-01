var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var OrderAction = {
    search: function(type, filter) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.ORDER_SEARCH,
            type: type,
            filter: filter
        });
    }
};

module.exports = OrderAction;
