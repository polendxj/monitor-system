/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var SubMenu = require('./subMenu');
var AppStore = require('../../../../stores/AppStore');
var AppAction = require('../../../../actions/AppAction');
var ToolBar = require('../../../../components/common/ToolBar/ToolBar');
var browserHistory = require('react-router').browserHistory;
var Button = require("react-bootstrap").Button;

var MenuStore = require('../../../../stores/MenuStore');
var MenuAction = require('../../../../actions/MenuAction');

require('jquery');

var viewBtn = [
    {id: 10001, name: "创建自定义视图"}
];
var viewCreate = [
    {id: 20001, name: "VCenter"}
];

var Menus = React.createClass({
    getInitialState: function () {
        return ({
            subMenus: [],
            breadcrumbDataList: MenuStore.getBreadcrumbData(),
            hoverParentIndex: -1,
            selectedParentIndex: -1,
            hoverIndex: -1,
            selectedIndex: 0
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_firstMenus, this._changeFirstMenu);
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_firstMenus, this._changeFirstMenu);
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    _changeFirstMenu: function () {
        this.setState({selectedIndex: 0});
        this.setState({subMenus: MenuStore.getSubMenus()});
        this.setState({selectedParentIndex: 0});
        if (this.state.subMenus.subMenus.length > 0) {
            setTimeout(function () {
                MenuAction.changeBreadcrumb(3, this.state.subMenus.subMenus[0]);
                this._clickSubMenu(0,0);
            }.bind(this), 10);
        }
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
    _hover: function (idx, hoverParentIdx) {
        this.setState({hoverIndex: idx});
        this.setState({hoverParentIndex: hoverParentIdx});
    },
    _leave: function () {
        this.setState({hoverIndex: -1});
    },
    _clickSubMenu: function (idx, selectedParentIdx) {
        var curTool = "";
        this.setState({selectedIndex: idx});
        this.setState({selectedParentIndex: selectedParentIdx});
        MenuAction.changeBreadcrumb(3, this.state.subMenus.subMenus[idx]);

        browserHistory.push("/list");

    },
    _clickViewMenu: function (obj) {
        browserHistory.push("/list");
        setTimeout(function () {
            MenuAction.changeViews(obj.name);
        },1);
        MenuAction.changeBreadcrumb(5, obj);
    },
    _clickCreateView: function (obj) {
        MenuAction.changeBreadcrumb(5, obj);
        browserHistory.push("/createView");
    },
    _editView: function (viewName, viewDesc, obj) {
        MenuAction.changeBreadcrumb(5, obj);
        browserHistory.push("/editView");
    },
    render: function () {
        var panel1 = "";
        var panel2 = "";
        var that = this;
        console.log(this.state.breadcrumbDataList);
        if (this.state.breadcrumbDataList.length >= 4) {
            panel1 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                              style={{padding:"7px 25px",color:"black"}}><span
                style={{fontWeight:"bold"}}>自定义视图</span></a>
                <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                    <li className="createView" onClick={that._clickCreateView.bind(that,viewBtn[0])}
                        style={{marginBottom:"4px",height:"50px",lineHeight:"50px",paddingLeft: "25px",backgroundColor:"white"}}
                        ><Button
                        style={{padding:"7px 25px 7px 10px",color:"black"}}><i className="fa fa-plus"></i>&nbsp;&nbsp;
                        {viewBtn[0].name}</Button>
                    </li>
                    <li className="views"
                        style={{marginBottom:"4px",padding:"7px 25px",backgroundColor:"white"}}
                        ><span onClick={that._clickViewMenu.bind(that,viewCreate[0])}
                               style={{cursor:"pointer"}}>{viewCreate[0].name}
                    </span><i onClick={that._editView.bind(that,"VCenter","version 5.5",viewCreate[0])}
                              className="fa fa-edit fa-lg"
                              title="编辑"
                              style={{float:"right",lineHeight:"22px",cursor:"pointer"}}></i>
                    </li>
                </ul>
            </li>
        } else {
            if (typeof(this.state.subMenus.subMenus) != "undefined" && this.state.subMenus.subMenus.length > 0) {
                panel1 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                                  style={{padding:"7px 30px",color:"black"}}><span
                    style={{fontWeight:"bold"}}>全部类型</span></a>
                    <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                        {this.state.subMenus.subMenus.map(function (subMenu, idx) {
                            return <li key={subMenu.name} onMouseOver={that._hover.bind(that,idx,0)}
                                       onMouseLeave={that._leave} onClick={that._clickSubMenu.bind(that,idx,0)}
                                       className="secondLayer"
                                       style={{marginBottom:"4px",paddingLeft: "0px",backgroundColor:((that.state.hoverIndex==idx&&that.state.hoverParentIndex==0)||(that.state.selectedIndex==idx&&that.state.selectedParentIndex==0))? "#e6e6e6":"white"}}>
                                <a
                                    href="#" style={{padding:"7px 30px",color:"black"}}>{subMenu.name}<span
                                    style={{color:"#45A2E1"}}>&nbsp;&nbsp;({subMenu.count})</span></a></li>;
                        })}
                    </ul>
                </li>;
                panel2 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                                  style={{padding:"7px 25px",color:"black"}}><span
                    style={{fontWeight:"bold"}}>故障管理</span></a>
                    <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                        <li className="secondLayer"
                            style={{marginBottom:"4px",paddingLeft: "0px",backgroundColor:((that.state.hoverIndex==0&&that.state.hoverParentIndex==1)||(that.state.selectedIndex==0&&that.state.selectedParentIndex==1))? "#e6e6e6":"white"}}
                            onMouseOver={that._hover.bind(that,0,1)}
                            onMouseLeave={that._leave} onClick={that._clickSubMenu.bind(that,0,1)}><a
                            href="#" style={{padding:"7px 25px",color:"black"}}>故障历史</a>
                        </li>
                        <li className="secondLayer"
                            style={{marginBottom:"4px",paddingLeft: "0px",backgroundColor:((that.state.hoverIndex==1&&that.state.hoverParentIndex==1)||(that.state.selectedIndex==1&&that.state.selectedParentIndex==1))? "#e6e6e6":"white"}}
                            onMouseOver={that._hover.bind(that,1,1)}
                            onMouseLeave={that._leave} onClick={that._clickSubMenu.bind(that,1,1)}><a
                            href="#" style={{padding:"7px 25px",color:"black"}}>故障修复状态</a>
                        </li>
                    </ul>
                </li>
            }
        }
        return (
            <ul className="cl-vnavigation">
                {panel1}
                {panel2}
            </ul>
        )
    }
});

module.exports = Menus;