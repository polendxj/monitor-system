/**
 * Created by Captain on 2016/6/8.
 */
var React = require("react");
var ToolBar = require("../../../ToolBar/ToolBar");
var MenuStore = require('../../../../../stores/MenuStore');
var MenuAction = require('../../../../../actions/MenuAction');

var style = {
    height: "35px",
    backgroundColor: "white",
    marginTop: "0px",
    color: "black",
    paddingTop: "0px"
};
var FirstMenuLayer = React.createClass({
    getInitialState: function () {
        return ({
            firstMenus: [],
            selectedIndex: 0
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_menus, this._changeTopMenu);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_menus, this._changeTopMenu);
    },
    _changeTopMenu: function () {
        this.setState({firstMenus: MenuStore.getFirstMenus()});
        //二级菜单暂时跳到第二个
        setTimeout(function () {
            console.log(MenuStore.getBreadcrumbData());
            if(MenuStore.getBreadcrumbData()[0].breadcrumbID==2){
                console.log(MenuStore.getBreadcrumbData());
                this.setState({selectedIndex: 1});
                setTimeout(function () {
                    MenuAction.changeFirstMenus(1, this.state.firstMenus[1]);
                }.bind(this), 1);
                setTimeout(function () {
                    MenuAction.changeBreadcrumb(2, this.state.firstMenus[1]);
                }.bind(this), 5);
            }else{
                this.setState({selectedIndex: 0});
                setTimeout(function () {
                    MenuAction.changeFirstMenus(0, this.state.firstMenus[0]);
                }.bind(this), 1);
                setTimeout(function () {
                    MenuAction.changeBreadcrumb(2, this.state.firstMenus[0]);
                }.bind(this), 5);
            }
        }.bind(this),5);
    },
    _click: function (idx) {
        this.setState({selectedIndex: idx});
        MenuAction.changeFirstMenus(idx, this.state.firstMenus[idx]);
        setTimeout(function () {
            MenuAction.changeBreadcrumb(2, this.state.firstMenus[idx]);
        }.bind(this), 1);
    },
    render: function () {
        var that = this;
        return (
            <div style={{height:"49px",backgroundColor:"white"}}>
                <ul className="nav navbar-nav"
                    style={{height:"49px",backgroundColor:"white",paddingLeft:"150px"}}>
                    {
                        this.state.firstMenus.map(function (firstMenu, idx) {
                            return (

                                <li key={firstMenu.id} className="firstMenu"
                                    onClick={that._click.bind(that,idx)} type="button"
                                    style={{borderBottom:that.state.selectedIndex==idx?"2px #ffa72f solid":"0",height: "39px",backgroundColor: "white",marginTop: "0px",paddingTop:"0px"}}>
                                    <a href="javascript:void(0)"
                                       style={{padding:"2px 22px",fontSize:"14px",lineHeight:"35px",color: "black"}}>{firstMenu.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
});

var FirstLayerBtn = React.createClass({
    render: function () {
        return (
            <button onClick={this._click} type="button"
                    className="btn btn-info btn-flat"
                    style={style}><span
                style={{fontSize:"14px",lineHeight:"35px"}}>{this.props.menu.name}</span>
            </button>
        )
    }
});

module.exports = FirstMenuLayer;