var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var DeviceAction = {
    search: function(filter) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.DEVICE_SEARCH,
            filter: filter
        });
    },
    detail: function(did) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.DEVICE_DETAIL,
            did: did
        });
    },
    label: function(did, label) {
        label = label ? label : null;
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.DEVICE_LABEL,
            did: did,
            label: label
        });
    },
    getDevice: function(did) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.DEVICE_SEARCH,
            did: did
        });
    },
    updateRemark: function (tid, did,remark, type) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.USER_REMARK_UPDATE,
            tid: tid,
            id: did,
            remark: remark,
            type: "device"
        });
    }
};

module.exports = DeviceAction;
