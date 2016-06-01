var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var TeamAction = {
    init: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.TEAM_INIT
        });
    },
    invite: function(email) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.TEAM_ADD_MEMBER,
            email: email
        });
    },
    del: function(id) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.TEAM_DEL_MEMBER,
            id: id
        });
    }
};

module.exports = TeamAction;
