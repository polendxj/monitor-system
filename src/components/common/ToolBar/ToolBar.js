/**
 * Created by jingpeng on 16/6/4.
 */
var React = require("react");
var Form = require("react-bootstrap/lib/Form");
var FormGroup = require("react-bootstrap/lib/FormGroup");
var ControlLabel = require("react-bootstrap/lib/ControlLabel");
var FormControl = require("react-bootstrap/lib/FormControl");
var DropdownButton = require("react-bootstrap/lib/DropdownButton");
var MenuItem = require("react-bootstrap/lib/MenuItem");
var Checkbox = require("react-bootstrap/lib/Checkbox");
var Tooltip = require("react-bootstrap/lib/Tooltip");
var OverlayTrigger = require("react-bootstrap/lib/OverlayTrigger");

var AppStore = require('../../../stores/AppStore');
var AppAction = require('../../../actions/AppAction');

var CreateVCenterModal = require("../VCenter/createVCenterModal");

require('jquery');

var icons = [
    {id: 0, icon: "fa fa-plus"},
    {id: 1, icon: "fa fa-cog"},
    {id: 2, icon: "fa fa-refresh"},
    {id: 3, icon: "fa fa-line-chart"}
];


var SelectTool = React.createClass({
    render: function () {
        return (
            <Form inline style={{height:"47px",display:"inline-block"}}>
                <FormGroup controlId="formControlsSelect" style={{margin:"0"}}>
                    <FormControl componentClass="select" placeholder="select"
                                 style={{height:"47px",border:"0 red solid",fontSize:"14px"}}>
                        <option value="select">Group : zabbix servers</option>
                        <option value="other">vm center</option>
                    </FormControl>
                </FormGroup>
            </Form>
        )
    }
});

var DropdownList = React.createClass({
    getInitialState: function () {
        return ({
            items: [{id: 1, text: "all"}, {id: 23, text: "zabbix server"}, {id: 34, text: "10.6.0.177"}],
            selected: -1
        })
    },
    _changeItem: function (eventKey) {
        this.setState({selected: eventKey});
    },
    render: function () {
        var list = [];
        var index = -1;
        this.state.items.forEach(function (value, key) {
            if (this.state.selected == value.id) {
                index = key;
            }
            list.push(<MenuItem key={value.id} onSelect={this._changeItem}
                                eventKey={value.id}>{value.text}</MenuItem>)
        }.bind(this));
        var title = this.state.selected == index ? this.props.defaultText : this.props.prefixText + (this.state.items[index].text);
        return (
            <DropdownButton title={title}
                            style={{height:"47px",margin:"0",backgroundColor:"white",border:"0 lightgray solid"}}
                            id={"default"}
                            noCaret={false}>
                {list}
            </DropdownButton>
        )

    }
});

var Text = React.createClass({
    render: function () {
        return (
            <OverlayTrigger placement="top"
                            overlay={<Tooltip><strong>{this.props.tip}</strong></Tooltip>}>
                <Form inline style={{height:"47px",display:"inline-block"}}>
                    <FormGroup controlId="formControlsText" style={{marginTop:"-4px"}}>
                        <FormControl type="text" placeholder={this.props.placeholder}
                                     style={{height:"47px",border:"0 red solid",fontSize:"13px"}}/>
                    </FormGroup>
                </Form>
            </OverlayTrigger>

        )
    }
});

var Button = React.createClass({
    getInitialState: function () {
        return ({
            normal: {
                float: "right",
                height: "47px",
                backgroundColor: "white",
                marginTop: "-9px",
                color: "#0073DA"
            },
            hover: {
                float: "right",
                height: "47px",
                backgroundColor: "#45A2E1",
                marginTop: "-9px",
                color: "white"
            },
            isNormal: true,
            lgShow: false
        })
    },
    _hover: function () {
        this.setState({isNormal: false});
    },
    _click: function (type) {
        var curTool = "";
        if (type == 3 || type == 5 || type == 7) {
            if (AppStore.getPreToolBarID() == 2) {
                curTool = {
                    id: 3,
                    bar: [
                        <DropdownList key={"bar0"} prefixText={"VCenter : "} defaultText={"请选择VCenter"}/>,
                        <Text key={"bar1"} placeholder={"请输入Hypervisor名称"} tip={"Hypervisor IP或名称"}/>,
                        <Text key={"bar2"} placeholder={"请输入VM名称"} tip={"VM IP或名称"}/>,
                        <DropdownList key={"bar3"} prefixText={"监控项 : "} defaultText={"请选择监控项"}/>
                    ]
                };
                AppAction.changeToolBar(3, curTool);
            } else if (AppStore.getPreToolBarID() == 4) {
                curTool = {
                    id: 5,
                    bar: [
                        <DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
                        <Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
                        <DropdownList key={"bar2"} prefixText={"服务 : "} defaultText={"请选择应用服务"}/>,
                        <DropdownList key={"bar3"} prefixText={"监控项 : "} defaultText={"请选择监控项"}/>

                    ]
                };
                AppAction.changeToolBar(5, curTool);
            } else if (AppStore.getPreToolBarID() == 6) {
                curTool = {
                    id: 7,
                    bar: [
                        <DropdownList key={"bar0"} prefixText={"组 : "} defaultText={"请选择组"}/>,
                        <Text key={"bar1"} placeholder={"请输入主机IP或名称"} tip={"主机IP或名称"}/>,
                        <DropdownList key={"bar2"} prefixText={"数据库 : "} defaultText={"请选择数据库"}/>,
                        <DropdownList key={"bar3"} t prefixText={"监控项 : "} defaultText={"请选择监控项"}/>

                    ]
                };
                AppAction.changeToolBar(7, curTool);
            }


        } else if (type == 0) {
            this.setState({lgShow: true})
        }
    },
    _leave: function () {
        this.setState({isNormal: true});

    },
    _lgClose: function (param) {
        if(param=="save"){
            this.setState({ lgShow: false });
            alert("保存成功!");
        }else{
            var r=confirm("您的VCenter信息未保存，确定不保存吗？");
            if(r){
                this.setState({ lgShow: false })
            }
        }
    },
    render: function () {
        var style = this.state.isNormal ? this.state.normal : this.state.hover;
        return (
            <OverlayTrigger placement="top"
                            overlay={<Tooltip><strong><i className={icons[this.props.icon].icon}> {this.props.tip}</i></strong></Tooltip>}>
                <button onMouseOver={this._hover} onMouseLeave={this._leave}
                        onClick={this._click.bind(this,this.props.icon)} type="button"
                        className="btn btn-info btn-flat"
                        style={style}><span
                    style={{fontSize:"12px",marginTop:"-2px"}}>{this.props.label}</span>
                    <CreateVCenterModal show={this.state.lgShow} onHide={this._lgClose}/>
                </button>

            </OverlayTrigger>

        )
    }
});

module.exports = {
    SelectTool,
    DropdownList,
    Text,
    Button
};