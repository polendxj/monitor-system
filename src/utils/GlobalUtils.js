/**
 * Created by jingpeng on 16/6/19.
 */
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
require('./item_enToCn');

var oldPriority = [];
var selectedTimes = [];
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
        selectedTimes = times;
        return times;
    },
    getTimes: function () {
        return selectedTimes;
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
    convertGraphData: function (type, value) {
        var rs = value;
        switch (type) {
            case "timestamp":
                if (typeof (value) == "number") {
                    var date = new Date(rs);
                    var Y = date.getFullYear() + '-';
                    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
                    var D = date.getDate() + ' ';
                    var h = date.getHours() + ':';
                    var m = date.getMinutes() + ':';
                    var s = date.getSeconds();
                    rs = Y + M + D + h + m + s;
                }
                break;
            case "memoryG":
                if (rs > 1024 * 1024) {
                    rs = (value / 1024 / 1024 / 1024).toFixed(2) * 1;
                }
                break;
            case "memoryM":
                rs = (value / 1024 / 1024).toFixed(2) * 1;
                break;
        }
        return rs;
    },
    getTickInterval: function (value) {
        var rs = 1000 * 30;
        var t = value / 12;
        if (t < 1) {
            rs = 1000;
        } else if (t < 20 && t > 2) {
            rs = 1000 * 5;
        } else if (t < 30 && t > 20) {
            rs = 1000 * 30;
        } else if (t < 60 && t > 30) {
            rs = 1000 * 60;
        } else if (t > 60 && t < 120) {
            rs = 1000 * 60 * 2;
        } else if (t > 120 && t < 600) {
            rs = 1000 * 60 * 5;
        } else if (t > 600 && t < 1200) {
            rs = 1000 * 60 * 10;
        } else if (t > 1200 && t < 2400) {
            rs = 1000 * 60 * 30;
        } else if (t > 2400 && t < 3600) {
            rs = 1000 * 3600;
        } else if (t > 3600 && t < 7200) {
            rs = 1000 * 3600 * 2;
        } else if (t > 7200 && t < 3600 * 5) {
            rs = 1000 * 3600 * 5;
        } else if (t > 3600 * 5 && t < 3600 * 12) {
            rs = 1000 * 3600 * 12;
        } else if (t > 3600 * 12 && t < 3600 * 24) {
            rs = 1000 * 3600 * 24;
        }
        return rs;
    },
    toDateUTC: function (value) {
        var rs = value;
        if (typeof (value) == "number") {
            if (value.toString().length == 10) {
                value = value * 1000;
            }
            var date = new Date(value);
            var year = date.getFullYear();
            var month = date.getMonth();
            var day = date.getDate();
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            rs = Date.UTC(year, month, day, hours, minutes, seconds);
        }
        return rs;
    },
    convertMemory: function (value) {
        var rs = value;
        rs = (value / 1024 / 1024 / 1024).toFixed(2);
        return rs;
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
                } else if (parseInt(value / 1024 / 1024) > 0) {
                    rs = (value / 1024 / 1024).toFixed(2) + "M";
                } else if (parseInt(value / 1024) > 0) {
                    rs = (value / 1024).toFixed(2) + "K";
                } else {
                    rs = (value / 1024).toFixed(2) + "B";
                }
                break;
            case "hz":
                if (parseInt(value / 1000 / 1000 / 1000) > 0) {
                    rs = (value / 1000 / 1000 / 1000).toFixed(1) + "GHz";
                } else if (parseInt(value / 1000 / 1000) > 0) {
                    rs = (value / 1000 / 1000).toFixed(1) + "MHz";
                } else if (parseInt(value / 1000) > 0) {
                    rs = (value / 1000).toFixed(1) + "KHz";
                } else {
                    rs = (value) + "Hz";
                }
                break;
            default :
                rs = value;
                break;
        }
        return rs;
    },
    getMonitorItemByKey: function (key) {
        var name = "未知";
        for (item in enToCn_data) {
            for (obj in enToCn_data[item]) {
                if (enToCn_data[item][obj].key == key) {
                    name = enToCn_data[item][obj].name_cn;
                }
            }
        }
        return name;
    },
    analysisAlarmLine: function (line) {
        var rs = [];
        while (line.indexOf('{') >= 0 && line.indexOf('}') >= 0) {
            var text = line.substring(line.indexOf('{'), line.indexOf('}') + 1);
            line = line.replace(text, '*');
        }
        return line;
    },
    analysisAlarmParams: function (params) {
        var rs = "";
        var count = 1;
        if (params) {
            var p = JSON.parse(params);
            for (item in p) {
                switch (p[item]) {
                    case "uint":
                        rs = rs + "参数" + count + ":大于0的整数  ";
                        break;
                    case "int":
                        rs = rs + "参数" + count + ":大于等于0的整数  ";
                        break;
                    default:
                        rs = rs + "参数" + count + ":大于0的整数 ,范围限定在" + p[item].substring(p[item].indexOf("_") + "  ");
                        break;
                }
            }
        } else {
            rs = "无";
        }
        return rs;
    },
    timestampToTimeText: function (timestamp) {
        var date = new Date(timestamp * 1000);
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var mins = date.getMinutes();
        return year + "-" + month + "-" + day + " " + hour + ":" + mins;
    },
    alarmLevelColor: function (level) {
        var color = "blue";
        switch (level) {
            case "High":
                color = "red";
                break;
            case "Average":
                color = "#45A2E1";
                break;
            case "Warning":
                color = "orange";
                break;
        }
        return color;
    }

});

module.exports = GlobalUtils;