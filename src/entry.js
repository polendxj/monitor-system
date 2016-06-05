var React = require('react');
var ReactDOM = require('react-dom');
var injectTapEventPlugin = require('react-tap-event-plugin');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;
var IndexRoute = require('react-router').IndexRoute;
var App=require('./components/App');
var Dashboard=require('./components/Dashboard');
var List=require('./components/common/Frame/FrameRight/MainContent/mainContent');

require('../static/maxent.min.js');

var jQuery = require('jquery');
var Clipboard = require('clipboard');
window.$ = jQuery;
window.jQuery = jQuery;
window.maxent = new Maxent();
maxent.init(config.TID);
require('bootstrap');
require("!style!css!less!bootstrap/less/bootstrap.less");
require("!style!css!less!font-awesome/less/font-awesome.less");
require('./css/skin-blue.less');

injectTapEventPlugin();
new Clipboard("[data-clipboard-text]");

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Dashboard} />
            <Route path="dashboard" component={Dashboard} />
            <Route path="list" component={List} />
        </Route>
    </Router>
), document.getElementById("wrap"));


