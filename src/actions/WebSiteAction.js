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
    },
    createHttp: function (obj) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.CreateHttp,
            jsonObject: obj
        })
    },
    deleteHttp: function (id, url, page) {
        AntiFraudDispatcher.dispatch({
            actionType: MonitorConstants.DeleteHttp,
            id: id,
            url:url,
            page:page
        })
    }
};

module.exports = AppServiceAction;
