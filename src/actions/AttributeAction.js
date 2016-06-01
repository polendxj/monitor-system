var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var AttributeAction = {
    init: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.ATTRIBUTE_INIT
        });
    },
    add: function(attribute) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.ATTRIBUTE_ADD,
            attribute: attribute
        });
    },
    del: function(index) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.ATTRIBUTE_DEL,
            index: index
        });
    },
    setEntity: function(entity) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.ATTRIBUTE_ENTITY,
            entity: entity
        });
    }
};

module.exports = AttributeAction;
