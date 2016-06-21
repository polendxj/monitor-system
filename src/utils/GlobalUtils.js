/**
 * Created by jingpeng on 16/6/19.
 */
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
require('./item_enToCn');

var oldPriority = [];
var GlobalUtils = assign({}, EventEmitter.prototype, {
    text2Time: function (text) {
        var times = [];
        switch (text) {
            case "今日":
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var mins = date.getMinutes();
                var time2 = {key: date.getTime(), value: year + "-" + month + "-" + day + " " + hour + ":" + mins};
                date.setHours(0);
                date.setMinutes(0);
                var time1 = {key: date.getTime(), value: year + "-" + month + "-" + day + " " + "00:00"};
                times.push(time1);
                times.push(time2);
                break;
            case "昨日":
                var date = new Date();
                date.setDate(date.getDate() - 1);
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                date.setHours(23);
                date.setMinutes(59);
                var time2 = {key: date.getTime(), value: year + "-" + month + "-" + day + " " + "23:59"};
                date.setHours(0);
                date.setMinutes(0);
                var time1 = {key: date.getTime(), value: year + "-" + month + "-" + day + " " + "00:00"};
                times.push(time1);
                times.push(time2);
                break;
            case "7日内":
                var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth() + 1;
                var day = date.getDate();
                var hour = date.getHours();
                var mins = date.getMinutes();
                var time2 = {key: date.getTime(), value: year + "-" + month + "-" + day + " " + hour + ":" + mins};
                date.setDate(date.getDate() - 6);
                date.setHours(0);
                date.setMinutes(0);
                var time1 = {
                    key: date.getTime(),
                    value: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + "00:00"
                };
                times.push(time1);
                times.push(time2);
                break;
            case "自定义":
                break;
        }
        console.log(times);
        return times;
    },
    en2Cn_item: function (json) {
        oldPriority.splice(0);
        var result = {};
        for (key in json) {
            for (t in  enToCn_data) {
                for (item in enToCn_data[t]) {
                    if (item == json[key].key_) {
                        if (typeof (result[t]) == "undefined") {
                            result[t] = {data: [enToCn_data[t][item]], index: enToCn_data[t].internalPriority};
                        } else {
                            result[t]["data"].push(enToCn_data[t][item]);
                        }
                    }
                }
            }
        }
        for (rs in result) {
            result[rs].data.sort(this.arrSort("priority"));
        }
        var final = this.objSort(result);
        return final;
    },
    getOldPriority: function () {
        return oldPriority;
    },
    arrSort: function (name) {
        return function (o, p) {
            var a, b;
            if (typeof o === "object" && typeof p === "object" && o && p) {
                a = o[name];
                b = p[name];
                if (a === b) {
                    return 0;
                }
                if (typeof a === typeof b) {
                    return a < b ? -1 : 1;
                }
                return typeof a < typeof b ? -1 : 1;
            }
            else {
                throw ("error");
            }

        }

    },
    objSort: function (object) {
        var dest = $.extend({}, object);
        var result = {};
        var c = 0;
        while (!$.isEmptyObject(dest)) {
            var count = 0;
            var min = "";
            var key = "";
            for (item in dest) {
                if (count == 0) {
                    key = item;
                    min = dest[item].index;
                }
                if (min > dest[item].index) {
                    key = item;
                    min = dest[item].index;
                }
                count++;
            }
            result[key] = dest[key].data;
            delete dest[key];
        }
        return result;

    },
    type2Style: function (type, value) {
        var rs = value;
        switch (type) {
            case "timestamp":
                if (parseInt(value / 24 / 3600) > 0) {
                    rs = parseInt(value / 24 / 3600) + "天" + parseInt((value % (3600 * 24)) / 3600) + "时" + parseInt(((value % (3600 * 24)) % 3600) / 60) + "分" + ((value % (3600 * 24)) % 3600) % 60 + "秒";
                } else {
                    if (parseInt(value / 3600) > 0) {
                        rs = value / 3600 + "时" + (value % 3600) / 60 + "分" + (value % 3600) % 60 + "秒";
                    } else {
                        if (parseInt(value / 60) > 0) {
                            rs = value / 60 + "分" + value % 60 + "秒";
                        } else {
                            rs = value + "秒";
                        }
                    }
                }
                break;
            case "percent":
                break;
            case "memory":
                if (parseInt(value / 1024 / 1024 / 1024) > 0) {
                    rs = (value / 1024 / 1024 / 1024).toFixed(2) + "G";
                }else if(parseInt(value / 1024 / 1024) > 0){
                    rs = (value / 1024 / 1024).toFixed(2) + "M";
                }else if(parseInt(value / 1024) > 0){
                    rs = (value / 1024).toFixed(2) + "K";
                }else{
                    rs = (value / 1024).toFixed(2) + "B";
                }
                break;
            case "hz":
                if (parseInt(value / 1000 / 1000 / 1000) > 0) {
                    rs = (value / 1000 / 1000 / 1000).toFixed(1) + "GHz";
                }else if(parseInt(value / 1000 / 1000) > 0){
                    rs = (value / 1000 / 1000).toFixed(1) + "MHz";
                }else if(parseInt(value / 1000) > 0){
                    rs = (value / 1000).toFixed(1) + "KHz";
                }else{
                    rs = (value) + "Hz";
                }
                break;
            default :
                rs = value;
                break;
        }
        return rs;
    }

});

module.exports = GlobalUtils;