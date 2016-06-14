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
    },
    changeBreadcrumb: function (level,object) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeBreadcrumb,
            level:level,
            breadcrumbData: object
        });
    },
    changeViews: function (data) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeViews,
            viewData: data
        });
    }
};


module.exports = MenuAction;
