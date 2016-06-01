/**
 * Created by jingpeng on 15/11/19.
 */
var AppDispatcher = require('../dispatcher/AntiFraudDispatcher');
var CriteriaConstants = require('../constants/CriteriaConstants').ActionTypes;

var CriteriaActions = {
    getAllCriteriaAlreadyHave: function () {
        AppDispatcher.dispatch({
            "actionType": CriteriaConstants.CRITERIA_GETALLL_LISTDEFINE
        });
    },
    changeFrom: function (type) {
        AppDispatcher.dispatch({
            "actionType": CriteriaConstants.CRITERIA_CHANGE_FROM,
            "type": type // prev or next
        });
    },
    changeScene: function (sceneKey) {
        AppDispatcher.dispatch({
            "actionType": CriteriaConstants.SCENE_CONVERT,
            "sceneKey": sceneKey
        });
    },
    initFeatures: function (type, idx) {
        AppDispatcher.dispatch({
            "actionType": CriteriaConstants.CRITERIA_INIT_FETURES,
            "type": type
        });
    },
    refresh: function () {
        AppDispatcher.dispatch({
            "actionType": CriteriaConstants.REFRESH
        });
    },
    changeApplication: function (tid) {
        AppDispatcher.dispatch({
            "actionType": CriteriaConstants.APPLICATION_CHANGE,
            "tid": tid
        });
    }
};

module.exports = CriteriaActions;
