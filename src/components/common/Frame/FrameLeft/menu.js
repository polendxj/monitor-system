/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var SubMenu = require('./subMenu');
var AppStore = require('../../../../stores/AppStore');
var AppAction = require('../../../../actions/AppAction');
var ToolBar = require('../../../../components/common/ToolBar/ToolBar');
var browserHistory = require('react-router').browserHistory;

require('jquery');

var menus = [
    {
        'name': '监控主面板',
        'icon': 'fa fa-home',
        'url': '',
        'status': false,
        'secondLayer': []
    },
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
        'name': '数据库监控',
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
];

var Menus = React.createClass({
    getInitialState: function () {
        return ({
            menus: menus
        })
    },
    _toggleMenu: function (idx) {
        switch (idx) {
            case 0:
                browserHistory.push("dashboard");
                break;
        }
        $(".firstLayer").not($(".firstLayer").eq(idx)).children("ul").slideUp(300, "swing");
        $(".firstLayer").eq(idx).children("ul").slideToggle(300, "swing");
        var m = this.state.menus;
        m = m.map(function (menu, index) {
            if (idx != index) {
                menu.status = false;
            } else {
                menu.status = !menu.status;
            }
            return menu;
        });
        this.setState({menus: m});

    },
    render: function () {
        var that = this;
        return (
            <ul className="cl-vnavigation">
                {
                    menus.map(function (menu, idx) {
                        if (menu.secondLayer.length == 0) {
                            return (
                                <li className={menu.status?"firstLayer active":"firstLayer"} key={menu.name}><a
                                    onClick={that._toggleMenu.bind(that,idx)} href="#"><i
                                    className={menu.icon}></i><span>{menu.name}</span></a>
                                </li>
                            )
                        } else {
                            return (
                                <li className={menu.status?"parent open firstLayer active":"parent firstLayer"}
                                    key={menu.name}><a onClick={that._toggleMenu.bind(that,idx)} href="#"><i
                                    className={menu.icon}></i><span>{menu.name}</span></a>
                                    <SubMenu status={menu.status} subMenus={menu.secondLayer} parent={idx}></SubMenu>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        )
    }
});

module.exports = Menus;