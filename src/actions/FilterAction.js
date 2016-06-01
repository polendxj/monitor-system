var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var FilterConstants = require('../constants/FilterConstants.js');
var assign = require('object-assign');

var FilterAction = {
    init: function(payload) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FILTER_INIT,
            type: payload.type,
            filter: payload.filter
        });
    },
    changeFilter: function(payload) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FILTER_CHANGE,
            filter: payload.filter
        });
    },
    addTerm: function(term) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FILTER_TERM_ADD,
            term: term
        });
    },
    delTerm: function(index) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FILTER_TERM_DELETE,
            index: index
        });
    },
    editTerm: function(index, term) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FILTER_TERM_EDIT,
            index: index,
            term: term
        });
    },
    editRange: function(index, range) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FILTER_RANGE_EDIT,
            index: index,
            range: range
        });
    },
    changeSort: function(sort) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.SORT_CHANGE,
            sort: sort
        });
    },
    changeFrom: function(from) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.FROM_CHANGE,
            from: from
        });
    },
    changeLimit: function(limit) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.LIMIT_CHANGE,
            limit: limit
        });
    },
    changeType: function(type) {
        AntiFraudDispatcher.dispatch({
            actionType: FilterConstants.TYPE_CHANGE,
            type: type
        });
    },
};

module.exports = FilterAction;
