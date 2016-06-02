var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var browserHistory = require('react-router').browserHistory;


var App = React.createClass({
    render: function () {
        return (
            <div>
                <div id="cl-wrapper">

                    <div className="cl-sidebar">
                        <div className="cl-toggle"><i className="fa fa-bars"></i></div>
                        <div className="cl-navblock">
                            <div className="menu-space">
                                <div className="content">
                                    <Logo />
                                    <Menus />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid" id="pcont">
                        <HeadNav />
                        <MainContent />

                    </div>
                </div>
            </div>
        )

    }
});

var Logo=React.createClass({
    render: function () {
        return(
            <div className="sidebar-logo">
                <div className="logo">

                </div>
                <div className="title"
                     style={{width:"138px",height:"40px",backgroundColor:"#45A2E1",float:"right"}}>
                    <div style={{height:"60%",fontSize:"20px",color:"white"}}>中国电信</div>
                    <div
                        style={{height:"40%",fontSize:"12px",color:"white"}}>服务监控平台<span style={{fontStyle:"italic",color:"#D3D3D3"}}>&nbsp;Alpha 0.1</span>
                    </div>
                </div>
            </div>
        )
    }
});

var Menus=React.createClass({
    render: function () {
        return(
            <ul className="cl-vnavigation">
                <li className="active"><a href="index.html"><i className="fa fa-home"></i><span>Dashboard</span></a>
                </li>
                <li><a href="#"><i className="fa fa-desktop"></i><span>Layouts</span></a>
                    <ul className="sub-menu">
                        <li><a href="layout-boxed.html"><span
                            className="label label-primary pull-right">New</span>Boxed
                            Layout</a>
                        </li>
                        <li><a href="layout-topbar.html"><span
                            className="label label-primary pull-right">New</span>Top Menu</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i className="fa fa-smile-o"></i><span>UI Elements</span></a>
                    <ul className="sub-menu">
                        <li  ><a href="ui-elements.html">General</a></li>
                        <li  ><a href="ui-alerts.html">Alerts</a></li>
                        <li  ><a href="ui-porlets.html"><span
                            className="label label-primary pull-right">New</span>Porlets</a>
                        </li>
                        <li  ><a href="ui-buttons.html">Buttons</a></li>
                        <li  ><a href="ui-modals.html">Modals</a></li>
                        <li  ><a href="ui-notifications.html">Notifications</a></li>
                        <li  ><a href="ui-tiles.html"><span
                            className="label label-primary pull-right">New</span>Tiles</a></li>
                        <li  ><a href="ui-progress.html">Progress Bars</a></li>
                        <li  ><a href="ui-icons.html">Icons</a></li>
                        <li  ><a href="ui-grid.html">Grid</a></li>
                        <li  ><a href="ui-tabs-accordions.html">Tabs Accordions</a></li>
                        <li  ><a href="ui-nestable-lists.html">Nestable Lists</a></li>
                        <li  ><a href="ui-treeview.html">Tree View</a></li>
                        <li  ><a href="ui-calendar.html"><span
                            className="label label-primary pull-right">New</span>Calendar</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i className="fa fa-list-alt"></i><span>Forms</span></a>
                    <ul className="sub-menu">
                        <li  ><a href="form-elements.html">Components</a></li>
                        <li  ><a href="form-multiselect.html"><span
                            className="label label-primary pull-right">New</span>Multiselect</a>
                        </li>
                        <li  ><a href="form-validation.html">Validation</a></li>
                        <li  ><a href="form-wizard.html">Wizard</a></li>
                        <li  ><a href="form-masks.html">Input Masks</a></li>
                        <li  ><a href="form-wysiwyg.html">WYSIWYG Editor</a></li>
                        <li  ><a href="form-upload.html">Multi Upload</a></li>
                    </ul>
                </li>
                <li><a href="#"><i className="fa fa-table"></i><span>Tables</span></a>
                    <ul className="sub-menu">
                        <li  ><a href="tables-general.html">General</a></li>
                        <li  ><a href="tables-datatables.html"><span
                            className="label label-primary pull-right">New</span>Data Tables</a>
                        </li>
                        <li  ><a href="tables-xeditable.html"><span
                            className="label label-primary pull-right">New</span>X-Editable</a>
                        </li>
                    </ul>
                </li>
                <li><a href="#"><i
                    className="fa fa-map-marker nav-icon"></i><span>Maps</span></a>
                    <ul className="sub-menu">
                        <li  ><a href="maps.html">Maps</a></li>
                        <li  ><a href="vector-maps.html">Vector Maps</a></li>
                    </ul>
                </li>
                <li><a href="#"><i
                    className="fa fa-envelope nav-icon"></i><span>Email</span></a>
                    <ul className="sub-menu">
                        <li  ><a href="email-inbox.html">Inbox</a></li>
                        <li  ><a href="email-read.html">Email Detail</a></li>
                    </ul>
                </li>
                <li  ><a href="typography.html"><i className="fa fa-text-height"></i><span>Typography</span></a>
                </li>
                <li  ><a href="charts.html"><i
                    className="fa fa-bar-chart-o"></i><span>Charts</span></a>
                </li>
                <li><a href="#"><i className="fa fa-file"></i><span>Pages</span></a>
                    <ul className="sub-menu">
                        <li  ><a href="pages-blank.html">Blank Page</a></li>
                        <li  ><a href="pages-blank-header.html">Blank Page Header</a></li>
                        <li  ><a href="pages-blank-aside.html">Blank Page Aside</a></li>
                        <li  ><a href="pages-blank-aside-header.html"><span
                            className="label label-primary pull-right">New</span>Blank Page
                            Aside
                            Header</a></li>
                        <li  ><a href="pages-profile.html"><span
                            className="label label-primary pull-right">New</span>Profile</a>
                        </li>
                        <li><a href="pages-login.html">Login</a></li>
                        <li><a href="pages-sign-up.html"><span
                            className="label label-primary pull-right">New</span>Sign Up</a>
                        </li>
                        <li><a href="pages-forgot.html"><span
                            className="label label-primary pull-right">New</span>Forgot Password</a>
                        </li>
                        <li><a href="pages-404.html">404 Page</a></li>
                        <li><a href="pages-500.html">500 Page</a></li>
                        <li  ><a href="pages-tour.html"><span
                            className="label label-primary pull-right">New</span>Tour Guide</a>
                        </li>
                        <li  ><a href="pages-gallery.html">Gallery</a></li>
                        <li  ><a href="pages-search.html"><span
                            className="label label-primary pull-right">New</span>Search</a></li>
                        <li  ><a href="pages-timeline.html">Timeline</a></li>
                        <li  ><a href="pages-code-editor.html">Code Editor</a></li>
                    </ul>
                </li>
            </ul>
        )
    }
});

var HeadNav=React.createClass({
    render: function () {
        return (
            <div id="head-nav" className="navbar navbar-default" style={{height:"89px"}}>
                <div style={{height:"41px",borderBottom:"thin #F0F0F0 solid"}}>
                    <div className="container-fluid">
                        <div className="navbar-collapse">
                            <div style={{width:"60%",height:"40px",position:"absolute",marginTop:"3px",marginLeft:"-10px"}}>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="请输入主机IP或主机名..."/>
                                                    <span className="input-group-btn">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fa fa-search"></i>
                                                    </button>
                                                    </span>
                                </div>
                            </div>
                            <ul className="nav navbar-nav navbar-right not-nav">
                                <li className="button" style={{padding:"10px 0"}}>
                                    <a className="toggle-menu menu-right push-body" style={{padding:"0"}}
                                       className="speech-button">
                                        <i className="fa fa-bell" style={{fontSize:"14px"}}></i>
                                        <span className="bubble" style={{top:"-7px",left:"24px"}}>2</span>
                                    </a>

                                </li>
                                <li className="button" style={{padding:"10px 0"}}>
                                    <a className="toggle-menu menu-right push-body" style={{padding:"0"}}
                                       className="speech-button">
                                        <i className="fa fa-cogs" style={{fontSize:"14px"}}></i>
                                    </a>
                                </li>
                                <li className="button" style={{padding:"10px 0"}}>
                                    <a className="toggle-menu menu-right push-body" style={{padding:"0"}}
                                       className="speech-button">
                                        <i className="fa fa-power-off" style={{fontSize:"14px"}}></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <MenuTool />

            </div>
        )
    }
});

var MenuTool=React.createClass({
    render: function () {
        return(
            <div style={{height:"47px"}}>

            </div>
        )
    }
});

var MainContent=React.createClass({
    render: function () {
        return (
            <div className="cl-mcont">

            </div>
        )
    }
});


module.exports = App;
