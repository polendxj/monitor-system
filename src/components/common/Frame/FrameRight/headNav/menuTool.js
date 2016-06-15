/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var ToolBar = require("../../../ToolBar/ToolBar");
var AppStore = require('../../../../../stores/AppStore');
var AppAction = require('../../../../../actions/AppAction');
var Breadcrumb = require('react-bootstrap/lib/Breadcrumb');
var MenuStore = require('../../../../../stores/MenuStore');
var MenuAction = require('../../../../../actions/MenuAction');

var MenuTool = React.createClass({
    getInitialState: function () {
        return ({
            toolItems: []
        })
    },
    componentDidMount: function () {
        AppStore.addChangeListener(AppStore.events.change_toolbar, this._changeToolBar);
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(AppStore.events.change_toolbar, this._changeToolBar);
    },
    _changeToolBar: function () {
        this.setState({toolItems: AppStore.getCurrentToolBar()})
    },
    render: function () {
        return (
            <div style={{height:"47px"}}>
                <Title />

                <Operator />

            </div>
        )
    }
});


var Title = React.createClass({
    getInitialState: function () {
        return ({
            title: "",
            breadcrumbDataList: MenuStore.getBreadcrumbData()
        })
    },
    componentDidMount: function () {
        AppStore.addChangeListener(AppStore.events.change_toolbar, this._changeToolBarTitle);
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(AppStore.events.change_toolbar, this._changeToolBarTitle);
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    _changeToolBarTitle: function () {
        this.setState({title: AppStore.getToolBarTitle()});
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
    _redirect: function (idx) {
        MenuAction.changeViews("");
        if(idx==0||idx==1){
            MenuAction.changeBreadcrumb(4,"");
            browserHistory.push("/list");
        }else if(idx==3||idx==2) {
            MenuAction.changeBreadcrumb(idx+2,"");
            browserHistory.push("/list");
        }
    },
    render: function () {
        var length=this.state.breadcrumbDataList.length-1;
        var breadcrumbs=[];
        this.state.breadcrumbDataList.forEach(function (breadcrumbData, idx) {
            if(length<=2){
                breadcrumbs.push (
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#" active>
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            }else{
                if (idx < length) {
                    breadcrumbs.push (
                        <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#">
                            {breadcrumbData.breadcrumbName}
                        </Breadcrumb.Item>
                    )
                } else {
                    breadcrumbs.push (
                        <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#" active>
                            {breadcrumbData.breadcrumbName}
                        </Breadcrumb.Item>
                    )
                }
            }
        }.bind(this));
        return (
            <div className="col-sm-7 col-md-7 col-lg-7"
                 style={{height:"30px",marginTop:"2px",fontSize:"12px",padding:"2px 0 0 6px"}}>
                <div style={{display:"inline-block",paddingRight:"20px"}}>
                    <Breadcrumb>
                        {breadcrumbs}
                    </Breadcrumb>
                </div>
            </div>
        )

    }

});


var Operator = React.createClass({
    getInitialState: function () {
        return ({
            breadcrumbData: MenuStore.getBreadcrumbData()
        })
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbData: MenuStore.getBreadcrumbData()});
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    render: function () {
        if (!this.state.breadcrumbData.fourthID) {

        } else {

        }

        return (
            <div className="col-sm-5 col-md-5 col-lg-5" style={{height:"30px",marginTop:"9px"}}>
                <ToolBar.Button label={"刷新"} icon={2} tip={"刷新数据"}/>
                <ToolBar.Button label={"配置"} icon={1} tip={"配置VCenter"}/>
                <ToolBar.Button label={"图表"} icon={3} tip={"实时图表监控"}/>
                <ToolBar.Button label={"创建"} icon={0} tip={"创建VCenter"}/>

                <div style={{width:"3px",height:"100%",borderLeft:"thin lightgray dotted",float:"right"}}></div>

            </div>
        )
    }
});


module.exports = MenuTool;