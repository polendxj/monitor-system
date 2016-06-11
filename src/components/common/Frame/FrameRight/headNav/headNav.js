/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var NavButton = require('./navButton');
var MenuTool = require('./menuTool');

var MenuAction = require('../../../../../actions/MenuAction');

var menus = [
    {
        'name': '平台概况',
        'icon': 'fa fa-home',
        'url': '',
        'status': false,
        'firstLayer': [
            {
                'name': '项目概况',
                'icon': 'fa fa-desktop',
                'url': '',
                'status': false,
                'secondLayer': []
            }
        ]
    },
    {
        'name': '系统监控',
        'icon': 'fa fa-home',
        'url': '',
        'status': false,
        'firstLayer': [
            {
                'name': '虚拟化监控',
                'icon': 'fa fa-desktop',
                'url': '',
                'status': false,
                'secondLayer': [
                    {
                        'name': 'VCenter',
                        'icon': '',
                        'url': ''
                    },
                    {
                        'name': 'HyperVisor',
                        'icon': '',
                        'url': ''
                    },
                    {
                        'name': 'VMS',
                        'icon': '',
                        'url': ''
                    }
                ]
            },
            {
                'name': '应用服务监控',
                'icon': 'fa fa-smile-o',
                'url': '',
                'status': false,
                'secondLayer': [
                    {
                        'name': 'Apache',
                        'icon': '',
                        'url': ''
                    },
                    {
                        'name': 'Nginx',
                        'icon': '',
                        'url': ''
                    }
                ]
            },
            {
                'name': '存储监控',
                'icon': 'fa fa-list-alt',
                'url': '',
                'status': false,
                'secondLayer': [
                    {
                        'name': 'MySql',
                        'icon': '',
                        'url': ''
                    },
                    {
                        'name': 'Oracle',
                        'icon': '',
                        'url': ''
                    }
                ]
            }
        ]
    },
    {
        'name': '日志管理',
        'icon': 'fa fa-home',
        'url': '',
        'status': false,
        'firstLayer': [
            {
                'name': '网站日志',
                'icon': 'fa fa-desktop',
                'url': '',
                'status': false,
                'secondLayer': []
            },
            {
                'name': '数据库日志',
                'icon': 'fa fa-smile-o',
                'url': '',
                'status': false,
                'secondLayer': [
                    {
                        'name': 'MySql日志',
                        'icon': '',
                        'url': ''
                    },
                    {
                        'name': 'Oracle日志',
                        'icon': '',
                        'url': ''
                    }
                ]
            },
            {
                'name': '服务日志',
                'icon': 'fa fa-list-alt',
                'url': '',
                'status': false,
                'secondLayer': []
            }
        ]
    }
];
var HeadNav = React.createClass({
    render: function () {
        return (
            /*<div id="head-nav" className="navbar navbar-default" style={{height:"130px"}}>
                <div style={{height:"41px",borderBottom:"thin #F0F0F0 solid",backgroundColor:"#45A2E1"}}>
                    <div className="container-fluid">
                        <div className="navbar-collapse">
                            <TopMenu menu={menus[0]}/>
                            <TopMenu menu={menus[1]}/>
                            <TopMenu menu={menus[2]}/>
                            <NavButton />
                        </div>
                    </div>
                </div>

            </div>*/
            <ul className="nav navbar-nav horizontal">
                <TopMenu menu={menus[0]}/>
                <TopMenu menu={menus[1]}/>
                <TopMenu menu={menus[2]}/>
            </ul>
        )
    }
});
var TopMenu = React.createClass({
    getInitialState: function () {
        return ({
            normal: {
                float: "left",
                height: "49px",
                backgroundColor: "#45A2E1",
                marginTop: "-9px",
                color: "white"
            },
            hover: {
                float: "left",
                height: "49px",
                backgroundColor: "white",
                marginTop: "-9px",
                color: "#45A2E1"
            },
            isNormal: true
        })
    },
    _hover: function () {
        this.setState({isNormal: false});
    },
    _leave: function () {
        this.setState({isNormal: true});
    },
    _click: function () {
        MenuAction.changeMenus(this.props.menu);
    },
    render: function () {
        var style = this.state.isNormal ? this.state.normal : this.state.hover;
        return (
            /*<button onMouseOver={this._hover} onMouseLeave={this._leave}
                    onClick={this._click} type="button"
                    className="btn btn-info btn-flat"
                    style={style}><span
                style={{fontSize:"14px",lineHeight:"41px"}}>{this.props.menu.name}</span>
            </button>*/
            <li className="topMenu" onMouseOver={this._hover} onMouseLeave={this._leave}
                onClick={this._click} type="button"
                ><a href="javascript:void(0)">{this.props.menu.name}</a></li>
        )
    }
});

module.exports = HeadNav;