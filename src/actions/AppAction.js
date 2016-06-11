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
    }
};

module.exports = AppAction;
