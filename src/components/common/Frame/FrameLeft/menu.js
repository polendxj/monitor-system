/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var SubMenu = require('./subMenu');

var menus = [
    {
        'name': 'Dashboard',
        'icon': 'fa fa-home',
        'url': '',
        'status': false,
        'secondLayer': []
    },
    {
        'name': 'Monitor',
        'icon': 'fa fa-desktop',
        'url': '',
        'status': false,
        'secondLayer': [
            {
                'name': 'Overview',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Web',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Latest data',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Triggers',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Events',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Graphs',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Screens',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Maps',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Discovery',
                'icon': '',
                'url': ''
            },
            {
                'name': 'IT services',
                'icon': '',
                'url': ''
            }
        ]
    },
    {
        'name': 'Inventory',
        'icon': 'fa fa-smile-o',
        'url': '',
        'status': false,
        'secondLayer': [
            {
                'name': 'Overview',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Host',
                'icon': '',
                'url': ''
            }
        ]
    },
    {
        'name': 'Reports',
        'icon': 'fa fa-list-alt',
        'url': '',
        'status': false,
        'secondLayer': [
            {
                'name': 'Status of Zabbix',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Availability report',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Triggers top 100',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Audit',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Action log',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Notifications',
                'icon': '',
                'url': ''
            }
        ]
    },
    {
        'name': 'Configuration',
        'icon': 'fa fa-list-alt',
        'url': '',
        'status': false,
        'secondLayer': [
            {
                'name': 'Host groups',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Templates',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Hosts',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Maintenance',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Actions',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Discovery',
                'icon': '',
                'url': ''
            },
            {
                'name': 'IT services',
                'icon': '',
                'url': ''
            }
        ]
    },
    {
        'name': 'Administration',
        'icon': 'fa fa-list-alt',
        'url': '',
        'status': false,
        'secondLayer': [
            {
                'name': 'General',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Proxies',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Authentication',
                'icon': '',
                'url': ''
            },
            {
                'name': 'User groups',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Users',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Media types',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Scripts',
                'icon': '',
                'url': ''
            },
            {
                'name': 'Queue',
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
        var m = this.state.menus;
        m = m.map(function (menu, index) {
            if(idx!=index){
                menu.status = false;
            }
            return menu;
        });
        m[idx].status = ! m[idx].status;
        this.setState({menus: m});
    },
    render: function () {
        var that = this;
        return (
            <ul className="cl-vnavigation">
                {
                    menus.map(function (menu, idx) {
                        if (menu.secondLayer.length == 0) {
                            return <li key={menu.name}><a href="#"><i className={menu.icon}></i><span>{menu.name}</span></a>
                            </li>;
                        } else {
                            return (
                                <li className={menu.status?"parent open":"parent"}
                                    key={menu.name}><a onClick={that._toggleMenu.bind(that,idx)} href="#"><i
                                    className={menu.icon}></i><span>{menu.name}</span></a>
                                    <SubMenu status={menu.status} subMenus={menu.secondLayer}></SubMenu>
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