var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var browserHistory = require('react-router').browserHistory;


var App = React.createClass({
    render: function () {
        return (
            <div> <img data-timestamp="1464785291561" id="graph_full" src="http://120.26.233.223/zabbix/chart2.php?graphid=547&amp;period=60&amp;stime=20170601204509&amp;updateProfile=1&amp;profileIdx=web.screens&amp;profileIdx2=547&amp;width=1298&amp;sid=f146a9a946ee6825&amp;screenid=&amp;curtime=1464785291561" style={{position: "relative","zIndex": 3}} /></div>
        )

    }
});


module.exports = App;
