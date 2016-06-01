var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var browserHistory = require('react-router').browserHistory;


var App = React.createClass({
    render: function () {
        return (
            <div> 杰,这是一个最基础的React页面,你先看看这个框架,每个目录我留了一个js,包括store,actions,constant,compoents,你先自己看看,有问题及时问... </div>
        )

    }
});


module.exports = App;
