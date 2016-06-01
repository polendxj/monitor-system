var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var EventAction = {
    searchDevice: function(did) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.NETWORK_DEVICE,
            did: did
        });
    },
    searchUser: function(uid) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.NETWORK_USER,
            uid: uid
        });
    }
};

module.exports = EventAction;
