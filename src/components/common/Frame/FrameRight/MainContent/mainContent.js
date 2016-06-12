/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var Jquery = require("jquery");
var ToolBar = require("../../../ToolBar/ToolBar");
var MenuTool = require("../headNav/menuTool");
var ButtonGroup = require("react-bootstrap/lib/ButtonGroup");
var DropdownButton = require("react-bootstrap/lib/DropdownButton");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var Button = require("react-bootstrap/lib/Button");
var ObjectList=require("../../../ObjectList/ObjectList");

var MenuAction = require('../../../../../actions/MenuAction');
var MenuStore=require('../../../../../stores/MenuStore');


var MainContent = React.createClass({
    render: function () {

        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <MenuTool />
                </div>
                <div style={{height:"47px"}}>
                    <Timestamp />
                    <Form />
                </div>
                <div>
                    <Content />
                </div>
            </div>
        )
    }
});

var Form = React.createClass({
    getInitialState: function () {
      return({
          groupItems:[{id:1,text:"zabbix server"}],
          serviceItems:[{id:1,text:"vcenter"},{id:2,text:"hypervisor"}]
      })
    },
    render: function () {
        return (
            <div className="col-sm-12 col-md-7 col-lg-7" style={{height:"47px",textAlign:"right"}}>
                <ToolBar.DropdownList items={this.state.groupItems} key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>
                <ToolBar.DropdownList items={this.state.serviceItems} key={"bar2"} prefixText={"服务 : "} defaultText={"请选择应用服务"}/>
                <ToolBar.Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>
            </div>
        )
    }
});

var Timestamp = React.createClass({
    getInitialState: function () {
        return({
            timeItems:[{id:1,text:"今日"},{id:2,text:"昨日"},{id:3,text:"7日内"},{id:4,text:"自定义"}]
        })
    },
    render: function () {
        return (
            <div className="col-sm-12 col-md-5 col-lg-5" style={{height:"47px",paddingLeft:"5px",marginTop:"-7px"}}>
                <ButtonGroup>
                    <ToolBar.DropdownList items={this.state.timeItems} noCaret={true} key={"bar0"} prefixText={"时间段 : "}
                                          defaultText={"时间段 : 今日 (2016-5-21 21:00 至 2016-5-21 22:30)"}/>
                </ButtonGroup>
            </div>
        )
    }
});

var Content = React.createClass({
    getInitialState: function () {
        return ({
            breadcrumbData : ""
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbData: MenuStore.getBreadcrumbData()});
    },
    render: function () {
        var div = "";
        if(this.state.breadcrumbData.fourthID==''){
            div = <div>
                <ObjectList.VCenterList />
                <ObjectList.HypervisorList />
                <ObjectList.VMSList />
            </div>;
        }
        if(this.state.breadcrumbData.fourthID==3){
            div = <div>
                {"hhh"}
            </div>;
        }
        return (
            <div style={{padding:"0 10px 0 10px"}}>
                {div}
            </div>
        )
    }
});

module.exports = MainContent;