var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var EventAction = {
    search: function(filter) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.EVENT_SEARCH,
            filter: filter
        });
    }
};

module.exports = EventAction;
