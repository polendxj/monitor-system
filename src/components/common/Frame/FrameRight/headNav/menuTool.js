/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var ToolBar = require("../../../ToolBar/ToolBar");
var AppStore = require('../../../../../stores/AppStore');
var AppAction = require('../../../../../actions/AppAction');
var Breadcrumb = require('react-bootstrap/lib/Breadcrumb');
var MenuStore=require('../../../../../stores/MenuStore');


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
            breadcrumbData : MenuStore.getBreadcrumbData()
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
        this.setState({breadcrumbData: MenuStore.getBreadcrumbData()});
    },
    render: function () {
        var breadcrumb="";
        console.log(this.state.breadcrumbData);
        if(!this.state.breadcrumbData.fourthID){
            breadcrumb=<Breadcrumb>
                <Breadcrumb.Item href="#">
                    {this.state.breadcrumbData.firstMenuName}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                    {this.state.breadcrumbData.secondMenuName}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {this.state.breadcrumbData.thirdMenuName}
                </Breadcrumb.Item>
            </Breadcrumb>
        }else{
            breadcrumb=<Breadcrumb>
                <Breadcrumb.Item href="#">
                    {this.state.breadcrumbData.firstMenuName}
                </Breadcrumb.Item>
                <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
                    {this.state.breadcrumbData.secondMenuName}
                </Breadcrumb.Item>
                <Breadcrumb.Item >
                    {this.state.breadcrumbData.thirdMenuName}
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {this.state.breadcrumbData.fourthMenuName}
                </Breadcrumb.Item>
            </Breadcrumb>
        }
        return (
            <div className="col-sm-7 col-md-7 col-lg-7"
                 style={{height:"30px",marginTop:"2px",fontSize:"12px",padding:"2px 0 0 6px"}}>
                <div style={{display:"inline-block",paddingRight:"20px"}}>
                    {breadcrumb}
                </div>
            </div>
        )

    }

});



var Operator = React.createClass({
    render: function () {
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