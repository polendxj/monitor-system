var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var FeatureAction = {
    init: function() {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.FEATURE_INIT
        });
    },
    remove: function(feature) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.FEATURE_REMOVE,
            feature: feature
        });
    },
    entity: function(entity) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.FEATURE_ENTITY,
            entity: entity
        });
    },
    search: function(keyword) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.FEATURE_SEARCH,
            keyword: keyword
        });
    }
};

module.exports = FeatureAction;
