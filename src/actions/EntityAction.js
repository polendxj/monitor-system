var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var EntityAction = {
    init: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.ENTITY_INIT
        });
    }
};

module.exports = EntityAction;
