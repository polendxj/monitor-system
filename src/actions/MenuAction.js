/**
 * Created by Captain on 2016/6/7.
 */
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var MenuAction = {
    changeMenus: function(object) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeMenus,
            firstMenus: object
        });
    },
    changeFirstMenus: function (idx,object) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeFirstMenus,
            idx:idx,
            subMenus: object
        });
    }
};

module.exports = MenuAction;
