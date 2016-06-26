var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var MonitorConstants = require('../constants/MonitorConstants');
var assign = require('object-assign');

var AppServiceAction = {
    getHttpList: function (url, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.ChangeHttpList,
            url: url,
            page: page
        })
    }
};

module.exports = AppServiceAction;
