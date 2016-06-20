/**
 * Created by jingpeng on 16/6/19.
 */
var assign = require('object-assign');
var EventEmitter = require('events').EventEmitter;
require('./item_enToCn');

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
                date.setDate(date.getDate()-1);
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
                date.setDate(date.getDate()-6);
                date.setHours(0);
                date.setMinutes(0);
                var time1 = {key: date.getTime(), value: date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + "00:00"};
                times.push(time1);
                times.push(time2);
                break;
            case "自定义":
                break;
        }
        console.log(times);
        return times;
    },
    en2Cn_item: function (text) {
        if(typeof (enToCn_data[text])!="undefined"){
            console.log(enToCn_data[text]);
            return enToCn_data[text];
        }else{
            return text;
        }
    }
});

module.exports = GlobalUtils;