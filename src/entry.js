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
var AllCharts = require("./components/common/highcharts/AllCharts");
var CreateView = require('./components/common/createViews/CreateView');
var EditView = require('./components/common/createViews/EditView');
var ConfigurationPage = require('./components/common/Configuration/ConfigurationPage');
var CreateVCenterModal = require('./components/common/VCenter/createVCenterModal');
var UserList = require('./components/common/SystemConfig/UserConfig/UserList');
var CreateUser = require('./components/common/SystemConfig/UserConfig/CreateUser');
var UpdatePwd = require('./components/common/SystemConfig/UserConfig/UpdatePwd');

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
            <Route path="allCharts" component={AllCharts} />
            <Route path="createView" component={CreateView} />
            <Route path="editView" component={EditView} />
            <Route path="configurationPage" component={ConfigurationPage} />
            <Route path="createVCenterModal" component={CreateVCenterModal} />
            <Route path="userList" component={UserList} />
            <Route path="createUser" component={CreateUser} />
            <Route path="updatePwd" component={UpdatePwd} />
        </Route>
    </Router>
), document.getElementById("wrap"));


