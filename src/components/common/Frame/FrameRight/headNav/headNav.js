/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var NavButton = require('./navButton');
var MenuTool = require('./menuTool');

var MenuAction = require('../../../../../actions/MenuAction');

menus = [
    {
        'name': '平台概况',
        'icon': 'fa fa-home',
        'url': '',
        'status': true,
        'firstLayer': [
            {
                'name': '项目概况',
                'icon': 'fa fa-desktop',
                'url': '',
                'status': true,
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
                'status': true,
                'secondLayer': [
                    {
                        'name': 'VCenter',
                        'icon': '',
                        'status': true,
                        'url': ''
                    },
                    {
                        'name': 'HyperVisor',
                        'icon': '',
                        'status': false,
                        'url': ''
                    },
                    {
                        'name': 'VMS',
                        'icon': '',
                        'status': false,
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
                        'status': false,
                        'url': ''
                    },
                    {
                        'name': 'Nginx',
                        'icon': '',
                        'status': false,
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
                        'status': false,
                        'url': ''
                    },
                    {
                        'name': 'Oracle',
                        'icon': '',
                        'status': false,
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
                        'status': false,
                        'url': ''
                    },
                    {
                        'name': 'Oracle日志',
                        'icon': '',
                        'status': false,
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
    },
    componentDidMount: function () {
        setTimeout(function () {
            MenuAction.changeMenus(menus[0]);
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