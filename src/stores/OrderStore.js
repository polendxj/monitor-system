var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
var ResourceUtils = require('./ResourceUtils.js');
var AntiFraudContants = require('../constants/AntiFraudConstants');
var AntiFraudDispatcher = require('../dispatcher/AntiFraudDispatcher');
var AppStore = require('./AppStore');

var orders = [];
var _orders = {};
var _total = 0;

var setUsers = function(data) {

    orders = [];
    _orders = {};

    data.forEach(function(order, index) {
        order.latest_label = assign({}, order.latest_label);
        var user = {
            score: parseInt(order.maxentScore),
            name: order.userid,
            email: order.email,
            id: order.userid,
            /*
             * hotfix events no label return
             * label: order.latest_label && order.latest_label.label ? order.latest_label.label : null,
             */
            label: 'event',
            latest_label_time: order.last_active_time,
            latest_active_time: order.last_active_time
        };
        order._user = user;
        orders.push(order);
        _orders[order._id] = assign({}, order, {index: index});
    });

    OrderStore.emitChange();
};

var setDevices = function(data) {

    orders = [];
    _orders = {};

    data.forEach(function(order, index) {
        var device = {
            score: parseInt(order.device_maxentScore),
            latest_active_time: order.last_active_time,
            latest_label_time: order.latest_label_time,
            /*
             * hotfix events no label return
             * label: order.latest_label.label
             */
            label: 'event',
        };
        order._device = device;
        orders.push(order);
        _orders[order._id] = assign({}, order, {index: index});
    });

    OrderStore.emitChange();
};

var OrderStore = assign({}, EventEmitter.prototype, {

    search: function(type, filter) {

        _total = 0;
        ResourceUtils.SEARCH.POST(filter, {
            type: type,
            tid: AppStore.getCurrent().tid
        }, function(json) {
            _total = json.total > 0 ? json.total : -1;
            var data = json.data;
            if (!data) {
                data = [];
            }
            switch (type) {
                case "CreateOrder":
                    setUsers(data);
                    break;
                case "ACT":
                    setDevices(data);
                    break;
                default:
                    setUsers(data);
                    break;
            }
        });
    },

    setLabel: function(uid, label) {
        orders.forEach(function(order, index) {
            if (order._user.id === uid) {
                order._user.label = label;
            }
        });
        OrderStore.emitChange();
    },

    getAll: function() {
        return orders;
    },

    getUser: function(key) {
        return _orders[key];
    },

    getTotal: function() {
        return _total;
    },

    emitChange: function() {
        this.emit("CHANGE");
    },

    addChangeListener: function(callback) {
        this.on("CHANGE", callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener("CHANGE", callback);
    }

});

AntiFraudDispatcher.register(function(action) {
    switch(action.actionType) {
        case AntiFraudContants.ORDER_SEARCH:
            OrderStore.search(action.type, action.filter);
            break;
        case AntiFraudContants.USER_LABEL:
            OrderStore.setLabel(action.uid, action.label);
            break;
        default:
            break;
    }
});

module.exports = OrderStore;
