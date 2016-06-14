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

var Menus = React.createClass({
    getInitialState: function () {
        return ({
            subMenus: [],
            breadcrumbData: MenuStore.getBreadcrumbData(),
            hoverParentIndex: -1,
            selectedParentIndex: -1,
            hoverIndex: -1,
            selectedIndex: -1
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
        this.setState({subMenus: MenuStore.getSubMenus()});
        if (this.state.subMenus.subMenus.length > 0) {
            setTimeout(function () {
                MenuAction.changeBreadcrumb("third", this.state.subMenus.subMenus[0]);
            }.bind(this), 10);
        }
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbData: MenuStore.getBreadcrumbData()});
    },
    _hover: function (idx, hoverParentIdx) {
        this.setState({hoverIndex: idx});
        this.setState({hoverParentIndex: hoverParentIdx});
    },
    _leave: function () {
        this.setState({hoverIndex: -1});
    },
    _clickViewMenu: function (data) {
        MenuAction.changeViews(data);
    },
    _clickSubMenu: function (idx, selectedParentIdx) {
        var curTool = "";
        this.setState({selectedIndex: idx});
        this.setState({selectedParentIndex: selectedParentIdx});
        MenuAction.changeBreadcrumb("third", this.state.subMenus.subMenus[idx]);
        switch (this.state.subMenus.parentIdx) {
            case 1:
                switch (idx) {
                    case 0:
                        curTool = {
                            id: 2,
                            bar: [
                                <ToolBar.DropdownList key={"bar0"} prefixText={"VCenter : "}
                                                      defaultText={"请选择VCenter"}/>,
                                <ToolBar.Text key={"bar1"} placeholder={"请输入Hypervisor名称"} tip={"Hypervisor IP或名称"}/>,
                                <ToolBar.Text key={"bar2"} placeholder={"请输入VM名称"} tip={"VM IP或名称"}/>
                            ]
                        };
                        AppAction.changeToolBar(2, curTool);
                        break;
                    case 1:
                        curTool = {
                            id: 4,
                            bar: [
                                <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
                                <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
                                <ToolBar.DropdownList key={"bar2"} prefixText={"服务 : "} defaultText={"请选择应用服务"}/>
                            ]
                        };
                        AppAction.changeToolBar(4, curTool);
                        break;
                    case 2:
                        curTool = {
                            id: 6,
                            bar: [
                                <ToolBar.DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
                                <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
                                <ToolBar.DropdownList key={"bar2"} prefixText={"数据库 : "} defaultText={"请选择数据库"}/>

                            ]
                        };
                        AppAction.changeToolBar(6, curTool);
                        break;
                }
                break;
        }

        browserHistory.push("/list");

    },
    render: function () {
        var panel1 = "";
        var panel2 = "";
        var panel3 = "";
        var that = this;
        if (this.state.breadcrumbData.fourthID != "") {
            panel3 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                              style={{padding:"7px 25px",color:"black"}}><span
                style={{fontWeight:"bold"}}>自定义视图</span></a>
                <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                    <li className="createView"
                        style={{marginBottom:"4px",height:"50px",lineHeight:"50px",paddingLeft: "25px",backgroundColor:"white"}}
                        ><Button
                        style={{padding:"7px 25px 7px 10px",color:"black"}}><i className="fa fa-plus"></i>&nbsp;&nbsp;创建自定义视图</Button>
                    </li>
                    <li className="views"
                        style={{marginBottom:"4px",padding:"7px 25px",backgroundColor:"white"}}
                        onClick={that._clickViewMenu.bind(that,"VCenter")}><span style={{cursor:"pointer"}}>VCenter</span>
                    </li>
                </ul>
            </li>
        } else {
            if (typeof(this.state.subMenus.subMenus) != "undefined" && this.state.subMenus.subMenus.length > 0) {
                panel1 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                                  style={{padding:"7px 25px",color:"black"}}><span
                    style={{fontWeight:"bold"}}>全部类型</span></a>
                    <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                        {this.state.subMenus.subMenus.map(function (subMenu, idx) {
                            return <li key={subMenu.name} onMouseOver={that._hover.bind(that,idx,0)}
                                       onMouseLeave={that._leave} onClick={that._clickSubMenu.bind(that,idx,0)}
                                       className="secondLayer"
                                       style={{marginBottom:"4px",paddingLeft: "0px",backgroundColor:((that.state.hoverIndex==idx&&that.state.hoverParentIndex==0)||(that.state.selectedIndex==idx&&that.state.selectedParentIndex==0))? "#e6e6e6":"white"}}>
                                <a
                                    href="#" style={{padding:"7px 25px",color:"black"}}>{subMenu.name}<span
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
                {panel3}
            </ul>
        )
    }
});

module.exports = Menus;