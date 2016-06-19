/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var AppStore = require('../../../../stores/AppStore');
var AppAction = require('../../../../actions/AppAction');
var ToolBar = require('../../../../components/common/ToolBar/ToolBar');
var browserHistory = require('react-router').browserHistory;
var Button = require("react-bootstrap").Button;

var MenuStore = require('../../../../stores/MenuStore');
var MenuAction = require('../../../../actions/MenuAction');

require('jquery');

viewBtn=[
    {id: 10001, name: "创建自定义视图"}
];
var Menus = React.createClass({
    getInitialState: function () {
        return ({
            subMenus: [],
            subSecondMenus: [],
            viewCreate:[
                {id: 20001, name: "VCenter"},
                {id: 20002, name: "vcModel"}
            ],
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
        if (typeof(this.state.subMenus.subMenus) != "undefined") {
            if (typeof(this.state.subMenus.subMenus.secondLayer) != "undefined" && this.state.subMenus.subMenus.secondLayer.length > 0) {
                switch (this.state.subMenus.subMenus.id) {
                    case 61:
                        setTimeout(function () {
                            MenuAction.changeBreadcrumb(3, this.state.subMenus.subMenus.secondLayer1[0]);
                            this._clickSubMenu(0, 1);
                        }.bind(this), 10);
                        break;
                    default :
                        setTimeout(function () {
                            MenuAction.changeBreadcrumb(3, this.state.subMenus.subMenus.secondLayer[0]);
                            this._clickSubMenu(0, 0);
                        }.bind(this), 10);
                        break;
                }
            }
        }
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
        if(this.state.breadcrumbDataList.length==4&&this.state.breadcrumbDataList[3].breadcrumbID==3){
            if(this.state.viewCreate.length>0){
                setTimeout(function () {
                    this._clickViewMenu(this.state.viewCreate[0]);
                }.bind(this), 10);
            }else{
                setTimeout(function () {
                    MenuAction.changeViews("");
                }.bind(this), 1);
            }
        }
    },
    _hover: function (idx, hoverParentIdx) {
        this.setState({hoverIndex: idx});
        this.setState({hoverParentIndex: hoverParentIdx});
    },
    _leave: function () {
        this.setState({hoverIndex: -1});
    },
    _clickSubMenu: function (idx, selectedParentIdx) {
        this.setState({selectedIndex: idx});
        this.setState({selectedParentIndex: selectedParentIdx});
        if (selectedParentIdx == 0) {
            MenuAction.changeBreadcrumb(3, this.state.subMenus.subMenus.secondLayer[idx]);
            switch (this.state.subMenus.subMenus.secondLayer[idx].id) {
                case 221:
                case 222:
                case 223:
                case 224:
                    browserHistory.push("/list");
                    break;
                case 611:
                    browserHistory.push("/updatePwd");
                    break;
            }
        } else if (selectedParentIdx == 1) {
            MenuAction.changeBreadcrumb(3, this.state.subMenus.subMenus.secondLayer1[idx]);
            switch (this.state.subMenus.subMenus.secondLayer1[idx].id) {
                case 612:
                    browserHistory.push("/userList");
                    break;
            }
        }
    },
    _clickViewMenu: function (obj) {
        browserHistory.push("/list");
        setTimeout(function () {
            MenuAction.changeViews(obj.name);
        }, 1);
        MenuAction.changeBreadcrumb(5, obj);
    },
    _clickCreateView: function (obj) {
        MenuAction.changeBreadcrumb(5, obj);
        browserHistory.push("/createView");
    },
    _editView: function (viewName, viewDesc, obj) {
        var o = {id: obj.id, name: "编辑自定义视图"};
        MenuAction.changeBreadcrumb(5, o);
        browserHistory.push("/editView");
    },
    render: function () {
        var panel1 = "";
        var panel2 = "";
        var that = this;
        var thirdMenuParentName1 = "";
        var thirdMenuParentName2 = "";
        if (typeof (this.state.breadcrumbDataList[0]) != "undefined") {
            switch (this.state.breadcrumbDataList[0].breadcrumbID) {
                case 2:
                    thirdMenuParentName1 = "全部类型";
                    thirdMenuParentName2 = "故障管理";
                    break;
                case 6:
                    thirdMenuParentName1 = "个人设置";
                    thirdMenuParentName2 = "用户设置";
                    break;
            }
        }
        if (typeof(this.state.subMenus.subMenus) != "undefined") {
            if (typeof(this.state.subMenus.subMenus.secondLayer) != "undefined" && this.state.subMenus.subMenus.secondLayer.length > 0) {
                panel1 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                                  style={{padding:"7px 30px",color:"black"}}><span
                    style={{fontWeight:"bold"}}>{thirdMenuParentName1}</span></a>
                    <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                        {this.state.subMenus.subMenus.secondLayer.map(function (subMenu, idx) {
                            return <li key={subMenu.name} onMouseOver={that._hover.bind(that,idx,0)}
                                       onMouseLeave={that._leave} onClick={that._clickSubMenu.bind(that,idx,0)}
                                       className="secondLayer"
                                       style={{marginBottom:"4px",paddingLeft: "0px",backgroundColor:((that.state.hoverIndex==idx&&that.state.hoverParentIndex==0)||(that.state.selectedIndex==idx&&that.state.selectedParentIndex==0))? "#e6e6e6":"white"}}>
                                <a
                                    href="#" style={{padding:"7px 30px",color:"black"}}>{subMenu.name}<span
                                    style={{color:"#45A2E1",display:subMenu.count==-1?"none":"inline"}}>&nbsp;&nbsp;
                                    ({subMenu.count})</span></a></li>;
                        })}
                    </ul>
                </li>;
            }
            if (typeof(this.state.subMenus.subMenus.secondLayer1) != "undefined" && this.state.subMenus.subMenus.secondLayer1.length > 0) {
                panel2 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                                  style={{padding:"7px 25px",color:"black"}}><span
                    style={{fontWeight:"bold"}}>{thirdMenuParentName2}</span></a>
                    <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                        {this.state.subMenus.subMenus.secondLayer1.map(function (subMenu, idx) {
                            return <li key={subMenu.name} onMouseOver={that._hover.bind(that,idx,1)}
                                       onMouseLeave={that._leave} onClick={that._clickSubMenu.bind(that,idx,1)}
                                       className="secondLayer"
                                       style={{marginBottom:"4px",paddingLeft: "0px",backgroundColor:((that.state.hoverIndex==idx&&that.state.hoverParentIndex==1)||(that.state.selectedIndex==idx&&that.state.selectedParentIndex==1))? "#e6e6e6":"white"}}>
                                <a
                                    href="#" style={{padding:"7px 30px",color:"black"}}>{subMenu.name}<span
                                    style={{color:"#45A2E1",display:subMenu.count==-1?"none":"inline"}}>&nbsp;&nbsp;
                                    ({subMenu.count})</span></a></li>;
                        })}
                    </ul>
                </li>;
            }
        }
        if (this.state.breadcrumbDataList.length >= 4) {
            var viewList = [];
            if(this.state.viewCreate.length>0){
                this.state.viewCreate.forEach(function (view, idx) {
                    viewList.push(
                        <li className="views" key={view.id}
                            style={{marginBottom:"4px",padding:"7px 25px",backgroundColor:"white"}}
                            ><span onClick={this._clickViewMenu.bind(this,view)}
                                   style={{cursor:"pointer"}}>{view.name}
                                </span><i onClick={this._editView.bind(this,"VCenter","version 5.5",view)}
                                          className="fa fa-edit fa-lg" title="编辑"
                                          style={{float:"right",lineHeight:"22px",cursor:"pointer"}}></i>
                        </li>
                    )
                }.bind(this));
            }
            switch (this.state.breadcrumbDataList[3].breadcrumbID) {
                case 3:
                    panel1 = <li style={{display:"block",width:"210px",backgroundColor:"#e6e6e6"}}><a href="#"
                                                                                                      style={{padding:"7px 25px",color:"black"}}><span
                        style={{fontWeight:"bold"}}>自定义视图</span></a>
                        <ul className="sub-menu" style={{display:"block",backgroundColor:"white"}}>
                            <li className="createView" onClick={that._clickCreateView.bind(that,viewBtn[0])}
                                style={{marginBottom:"4px",height:"50px",lineHeight:"50px",paddingLeft: "25px",backgroundColor:"white"}}
                                ><Button
                                style={{padding:"7px 25px 7px 10px",color:"black"}}><i
                                className="fa fa-plus"></i>&nbsp;&nbsp;
                                {viewBtn[0].name}</Button>
                            </li>
                            {viewList}
                        </ul>
                    </li>;
                    panel2 = "";
                    break;
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