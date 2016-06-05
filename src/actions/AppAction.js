var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var AppAction = {
    changeToolBar: function(id,object) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeToolBar,
            id: id,
            object: object
        });
    }
};

module.exports = AppAction;
