/**
 * Created by jingpeng on 15/11/19.
 */
var AppDispatcher = require('../dispatcher/AntiFraudDispatcher');
var SearchConstants = require('../constants/SearchConstants').ActionTypes;

var SearchActions={
    search: function (text) {
        AppDispatcher.dispatch({
            "actionType":SearchConstants.SEARCH_USER_ORDER,
            "text":text
        });
    }
};

module.exports=SearchActions;
