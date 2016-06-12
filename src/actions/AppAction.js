var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var AppAction = {
    changeToolBar: function (id, object, title) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeToolBar,
            id: id,
            object: object,
            title: title
        });
    },
    saveOperator: function (id,text) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.SaveOperator,
            id: id,
            text: text
        });
    }
};

module.exports = AppAction;
