/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var AppAction = require('../../../../actions/AppAction');
var browserHistory = require('react-router').browserHistory;
var ToolBar = require('../../ToolBar/ToolBar');
require('jquery');

var SubMenu = React.createClass({
    getInitialState: function () {
        return ({
            flag: false
        })
    },
    _clickSubMenu: function (idx) {
        var curTool = "";
        switch(this.props.parent){
            case 1:
                switch (idx) {
                    case 0:
                        curTool = {
                            id: 2,
                            bar: [
                                <ToolBar.DropdownList key={"bar0"} prefixText={"VCenter : "} defaultText={"请选择VCenter"}/>,
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
        var that = this;
        if (this.props.subMenus.length == 1) {
            return (
                <ul className="sub-menu">
                    <li onClick={this._clickSubMenu} className="secondLayer"
                        style={{paddingLeft: "13px"}}><a href="#">{menu.secondLayer[0].name}</a></li>
                </ul>
            )
        } else {
            return (
                <ul className="sub-menu">
                    {this.props.subMenus.map(function (subMenu,idx) {
                        return <li onClick={that._clickSubMenu.bind(that,idx)}
                                   className="secondLayer" key={subMenu.name} style={{paddingLeft: "13px"}}><a
                            href="#">{subMenu.name}</a></li>;
                    })}
                </ul>
            )
        }
    }
});

module.exports = SubMenu;