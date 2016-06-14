var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var browserHistory = require('react-router').browserHistory;
var Logo = require('./common/Frame/FrameLeft/logo');
var Menus = require('./common/Frame/FrameLeft/menu');
var TopMenu = require('./common/Frame/FrameRight/headNav/TopMenu');
var MainContent = require('./common/Frame/FrameRight/MainContent/mainContent');

var FirstMenuLayer = require('./common/Frame/FrameRight/headNav/FirstMenuLayer');
var NavButton = require('./common/Frame/FrameRight/headNav/navButton');


var App = React.createClass({
        getInitialState: function () {
            return ({
                menuCollapsed: false
            })
        },
        _collapsedMenu: function () {
            this.setState({menuCollapsed: !this.state.menuCollapsed});
        },
        render: function () {
            return (
                <div id="cl-wrapper" className={this.state.menuCollapsed?"sb-collapsed":""}>
                    <div className="container-fluid" id="pcont">
                        {/*Top Bar*/}
                        <div id="head-nav" className="topbar navbar navbar-default" style={{height:"99px"}}>
                            <div className="container-fluid">
                                <div className="navbar-collapse collapse">
                                    <Logo _collapsedMenu={this._collapsedMenu}
                                          menuCollapsed={this.state.menuCollapsed}/>
                                    <TopMenu />
                                    <NavButton />
                                </div>
                                <FirstMenuLayer />
                            </div>
                        </div>
                        {/*Bottom Bar*/}
                        <div className="cl-mcont aside"
                             style={{padding:"74px 5px 0 5px",display:"inline-table",height:"1200px"}}>
                            <div className="cl-sidebar" style={{backgroundColor:"white"}}>
                                <div className="cl-toggle"><i className="fa fa-bars"></i></div>
                                <div className="cl-navblock">
                                    <div className="menu-space">
                                        <div className="content">
                                            <Menus />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                <div className="cl-mcont text-left" style={{fontFamily: "Arial",padding:"0 2px 0 7px"}}>
                                    {this.props.children}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            )
        }
    })
    ;


module.exports = App;
