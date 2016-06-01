var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher.js');
var AntiFraudConstants = require('../constants/AntiFraudConstants.js');
var assign = require('object-assign');

var UserAction = {
    search: function (filter) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.USER_SEARCH,
            filter: filter
        });
    },
    detail: function (uid) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.USER_DETAIL,
            uid: window.encodeURIComponent(uid)
        });
    },
    label: function (uid, label) {
        label = label ? label : null;
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.USER_LABEL,
            uid: uid,
            label: label
        });
    },
    updateRemark: function (tid, uid,remark, type) {
        AntiFraudDispatcher.dispatch({
            actionType: AntiFraudConstants.USER_REMARK_UPDATE,
            tid: tid,
            id: uid,
            remark: remark,
            type: "user"
        });
    }
};

module.exports = UserAction;
