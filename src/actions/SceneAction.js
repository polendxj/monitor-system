/**
 * Created by jingpeng on 16/3/8.
 */
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var SceneAction = {
    convert: function (sceneKey) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.USER_SEARCH,
            sceneKey: sceneKey
        });
    }
};