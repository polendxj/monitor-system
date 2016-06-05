var React = require('react');
var ReactDOM = require('react-dom');
var jQuery = require('jquery');
var browserHistory = require('react-router').browserHistory;
var Logo = require('./common/Frame/FrameLeft/logo');
var Menus = require('./common/Frame/FrameLeft/menu');
var HeadNav = require('./common/Frame/FrameRight/headNav/headNav');
var MainContent = require('./common/Frame/FrameRight/MainContent/mainContent');


var App = React.createClass({
    getInitialState: function () {
        return ({
            menuCollapsed : false
        })
    },
    _collapsedMenu: function () {
        this.setState({menuCollapsed: !this.state.menuCollapsed});
    },
    render: function () {
        var panel="";
        if(this.props.children.props.location.pathname=="/" || this.props.children.props.location.pathname=="/dashboard"){
            panel=<div className="container-fluid" id="pcont">
                {this.props.children}
            </div>
        }else{
            panel=<div className="container-fluid" id="pcont">
                <HeadNav />
                {this.props.children}
            </div>
        }

        return (
            <div>
                <div id="cl-wrapper" className={this.state.menuCollapsed?"sb-collapsed":""}>

                    <div className="cl-sidebar">
                        <div className="cl-toggle"><i className="fa fa-bars"></i></div>
                        <div className="cl-navblock">
                            <div className="menu-space">
                                <div className="content">
                                    <Logo _collapsedMenu={this._collapsedMenu} menuCollapsed={this.state.menuCollapsed}/>
                                    <Menus />
                                </div>
                            </div>
                        </div>
                    </div>
                    {panel}
                </div>
            </div>
        )

    }
});


module.exports = App;
