var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var StatAction = {
    init: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.STAT_INIT
        });
    }
};

module.exports = StatAction;
