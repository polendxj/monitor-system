/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var NavButton = require('./navButton');
var MenuTool = require('./menuTool');

var MenuAction = require('../../../../../actions/MenuAction');
var MenuStore=require('../../../../../stores/MenuStore');
var browserHistory = require('react-router').browserHistory;

menus = [
    {
        id:1,
        name: '系统概览',
        icon: 'fa fa-home',
        url: '',
        status: true,
        firstLayer: [
            {
                id:11,
                name: '项目概况',
                icon: 'fa fa-desktop',
                url: '',
                status: true,
                secondLayer: []
            }
        ]
    },
    {
        id:2,
        name: '资源监控',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: [
            {
                id:21,
                name: '服务器监控',
                icon: 'fa fa-desktop',
                url: '',
                status: true,
                secondLayer: [
                    {
                        id:211,
                        name: 'Windows',
                        icon: '',
                        count:2,
                        status: true,
                        'url': ''
                    },
                    {
                        id:212,
                        name: 'Linux',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:213,
                        name: 'Unix',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:214,
                        name: 'IBM服务器',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:215,
                        name: 'HP服务器',
                        icon: '',
                        count:106,
                        status: false,
                        url: ''
                    },
                    {
                        id:216,
                        name: 'Dell服务器',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:217,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:218,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:22,
                name: '虚拟化云监控',
                icon: 'fa fa-desktop',
                url: '',
                status: true,
                secondLayer: [
                    {
                        id:221,
                        name: 'VCenter',
                        icon: '',
                        count:2,
                        status: true,
                        'url': ''
                    },
                    {
                        id:222,
                        name: 'Hypervisor',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:223,
                        name: 'VMS',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:223,
                        name: 'Docker',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:224,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:225,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:23,
                name: '数据库监控',
                icon: 'fa fa-desktop',
                url: '',
                status: true,
                secondLayer: [
                    {
                        id:231,
                        name: 'Oracle',
                        icon: '',
                        count:2,
                        status: true,
                        'url': ''
                    },
                    {
                        id:232,
                        name: 'MySQL',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:233,
                        name: 'SQL Server',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:234,
                        name: 'MongoDB',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:235,
                        name: 'DB2',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:236,
                        name: 'Sybase',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    },
                    {
                        id:237,
                        name: 'PostgreSQL',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:238,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:239,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:24,
                name: '应用服务监控',
                icon: 'fa fa-smile-o',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:241,
                        name: 'Apache',
                        icon: '',
                        count:15,
                        status: false,
                        url: ''
                    },
                    {
                        id:242,
                        name: 'Microsoft IIS',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:243,
                        name: 'Nginx',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:244,
                        name: 'Lighttpd',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:245,
                        name: 'Tomcat',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:246,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:247,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:25,
                name: '网站监控',
                icon: 'fa fa-list-alt',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:251,
                        name: 'Http',
                        icon: '',
                        count:12,
                        status: false,
                        url: ''
                    },
                    {
                        id:252,
                        name: 'Ping',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:253,
                        name: 'TCP',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:254,
                        name: 'UDP',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:255,
                        name: 'SMTP',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:256,
                        name: 'FTP',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:257,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:258,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:26,
                name: '网络设备监控',
                icon: 'fa fa-list-alt',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:261,
                        name: '交换机',
                        icon: '',
                        count:12,
                        status: false,
                        url: ''
                    },
                    {
                        id:262,
                        name: '路由器',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:263,
                        name: '防火墙',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:264,
                        name: '负载均衡',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:265,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:266,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:27,
                name: '存储监控',
                icon: 'fa fa-list-alt',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:271,
                        name: 'EMC',
                        icon: '',
                        count:12,
                        status: false,
                        url: ''
                    },
                    {
                        id:272,
                        name: 'IBM',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:273,
                        name: 'HP',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:274,
                        name: 'NetAPP',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    },
                    {
                        id:275,
                        name: 'SasRaid',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    }
                ],
                secondLayer1: [
                    {
                        id:276,
                        name: '故障历史',
                        icon: '',
                        count:-1,
                        status: true,
                        'url': ''
                    },
                    {
                        id:277,
                        name: '故障修复状态',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            }
        ]
    },
    {
        id:3,
        name: '告警管理',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: [

        ]
    },
    {
        id:4,
        name: '拓扑视图',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: []
    },
    {
        id:5,
        name: '统计报表',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: []
    },
    {
        id:6,
        name: '系统配置',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: [
            {
                id:61,
                name: '用户中心',
                icon: 'fa fa-home',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:611,
                        name: '修改密码',
                        icon: 'fa fa-home',
                        url: '',
                        count:-1,
                        status: false
                    }
                ],
                secondLayer1: [
                    {
                        id:612,
                        name: '全部用户',
                        icon: 'fa fa-home',
                        url: '',
                        count:-1,
                        status: false
                    }
                ]
            }
        ]
    }
];
var TopMenu = React.createClass({
    getInitialState: function () {
      return({
          selectedIndex: 0
      })
    },
    componentDidMount: function () {
        setTimeout(function () {
            MenuAction.changeMenus(menus[0]);
        },1);
        setTimeout(function () {
            MenuAction.changeBreadcrumb(1,menus[0]);
        },1);
    },
    _click: function (idx) {
        this.setState({selectedIndex:idx});
        if(idx==0){
            browserHistory.push("/dashboard");
            MenuAction.changeMenus(menus[idx]);
        }else{
            MenuAction.changeMenus(menus[idx]);
            setTimeout(function () {
                MenuAction.changeBreadcrumb(1,menus[idx]);
            }.bind(this),1);
        }

    },
    render: function () {
        var that = this;
        return (
            <ul className="nav navbar-nav horizontal">
                {menus.map(function (menu,idx) {
                    return (
                        <li key={menu.id} className="topMenu"
                            onClick={that._click.bind(that,idx)} type="button"
                            style={{backgroundColor:that.state.selectedIndex==idx?"white":"#45A2E1"}} ><a href="javascript:void(0)" style={{padding:"15px 15px",color:that.state.selectedIndex==idx?"#ffa72f":"white"}}>{menu.name}</a></li>
                    )
                })}
            </ul>
        )
    }
});

module.exports = TopMenu;