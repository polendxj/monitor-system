/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var NavButton = require('./navButton');
var MenuTool = require('./menuTool');

var MenuAction = require('../../../../../actions/MenuAction');
var MenuStore=require('../../../../../stores/MenuStore');

menus = [
    {
        id:1,
        name: '平台概况',
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
        name: '系统监控',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: [
            {
                id:21,
                name: '虚拟化监控',
                icon: 'fa fa-desktop',
                url: '',
                status: true,
                secondLayer: [
                    {
                        id:211,
                        name: 'VCenter',
                        icon: '',
                        count:2,
                        status: true,
                        'url': ''
                    },
                    {
                        id:212,
                        name: 'HyperVisor',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    },
                    {
                        id:213,
                        name: 'VMS',
                        icon: '',
                        count:104,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:22,
                name: '应用服务监控',
                icon: 'fa fa-smile-o',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:221,
                        name: 'Apache',
                        icon: '',
                        count:15,
                        status: false,
                        url: ''
                    },
                    {
                        id:222,
                        name: 'Nginx',
                        icon: '',
                        count:8,
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:23,
                name: '存储监控',
                icon: 'fa fa-list-alt',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:231,
                        name: 'MySql',
                        icon: '',
                        count:12,
                        status: false,
                        url: ''
                    },
                    {
                        id:232,
                        name: 'Oracle',
                        icon: '',
                        count:48,
                        status: false,
                        url: ''
                    }
                ]
            }
        ]
    },
    {
        id:3,
        name: '日志管理',
        icon: 'fa fa-home',
        url: '',
        status: false,
        firstLayer: [
            {
                id:31,
                name: '网站日志',
                icon: 'fa fa-desktop',
                url: '',
                status: false,
                secondLayer: []
            },
            {
                id:32,
                name: '数据库日志',
                icon: 'fa fa-smile-o',
                url: '',
                status: false,
                secondLayer: [
                    {
                        id:321,
                        name: 'MySql日志',
                        icon: '',
                        status: false,
                        url: ''
                    },
                    {
                        id:322,
                        name: 'Oracle日志',
                        icon: '',
                        status: false,
                        url: ''
                    }
                ]
            },
            {
                id:33,
                name: '服务日志',
                icon: 'fa fa-list-alt',
                url: '',
                status: false,
                secondLayer: []
            }
        ]
    }
];
var HeadNav = React.createClass({
    getInitialState: function () {
      return({
          selectedMenu: 0
      })
    },
    transIdx: function (idx) {
        this.setState({selectedMenu:idx});
    },
    render: function () {
        return (
            <ul className="nav navbar-nav horizontal">
                <TopMenu menu={menus[0]} idx={0} transIdx={this.transIdx} selectedMenu={this.state.selectedMenu}/>
                <TopMenu menu={menus[1]} idx={1} transIdx={this.transIdx} selectedMenu={this.state.selectedMenu}/>
                <TopMenu menu={menus[2]} idx={2} transIdx={this.transIdx} selectedMenu={this.state.selectedMenu}/>
            </ul>
        )
    }
});
var TopMenu = React.createClass({
    _click: function (idx) {
        //this.setState({selectedIndex: this.props.idx});
        this.props.transIdx(idx);
        MenuAction.changeMenus(this.props.menu);
        setTimeout(function () {
            MenuAction.changeBreadcrumb("first",this.props.menu);
        }.bind(this),1);
    },
    componentDidMount: function () {
        setTimeout(function () {
            MenuAction.changeMenus(menus[0]);
        },1);
        setTimeout(function () {
            MenuAction.changeBreadcrumb("first",menus[0]);
        },1);
    },
    render: function () {
        var styleFlag = this.props.selectedMenu==this.props.idx;
        return (
            <li className="topMenu"
                onClick={this._click.bind(this,this.props.idx)} type="button"
               style={{backgroundColor:styleFlag?"white":"#45A2E1"}} ><a href="javascript:void(0)" style={{padding:"15px 15px",color:styleFlag?"#ffa72f":"white"}}>{this.props.menu.name}</a></li>
        )
    }
});

module.exports = HeadNav;