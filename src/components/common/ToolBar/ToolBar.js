/**
 * Created by jingpeng on 16/6/4.
 */
var React = require("react");
var Jqyery = require("jquery");
var Form = require("react-bootstrap/lib/Form");
var FormGroup = require("react-bootstrap/lib/FormGroup");
var ControlLabel = require("react-bootstrap/lib/ControlLabel");
var FormControl = require("react-bootstrap/lib/FormControl");
var DropdownButton = require("react-bootstrap/lib/DropdownButton");
var DateTimeField = require('react-bootstrap-datetimepicker');
var MenuItem = require("react-bootstrap/lib/MenuItem");
var Checkbox = require("react-bootstrap/lib/Checkbox");
var Tooltip = require("react-bootstrap/lib/Tooltip");
var OverlayTrigger = require("react-bootstrap/lib/OverlayTrigger");
var browserHistory = require('react-router').browserHistory;
var ReactButton = require("react-bootstrap/lib/Button");
var AppStore = require('../../../stores/AppStore');
var AppAction = require('../../../actions/AppAction');

var MenuAction = require('../../../actions/MenuAction');
var MenuStore = require('../../../stores/MenuStore');

var CreateVCenterModal = require("../VCenter/createVCenterModal");


require('jquery');

var icons = [
    {id: 0, icon: "fa fa-plus"},
    {id: 1, icon: "fa fa-cog"},
    {id: 2, icon: "fa fa-refresh"},
    {id: 3, icon: "fa fa-line-chart"},
    {id: 4, icon: "fa fa-list"}
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
            selected: -1
        })
    },
    _changeItem: function (eventKey) {
        this.setState({selected: eventKey});
        this.props.items.forEach(function (value, key) {
            if (eventKey == value.id) {
                this.props.onChange(eventKey, value.text);
                return false;
            }
        }.bind(this));


    },
    render: function () {
        var list = [];
        var index = -1;
        this.props.items.forEach(function (value, key) {
            if (this.state.selected == value.id) {
                index = key;
            }
            list.push(<MenuItem key={value.id} onSelect={this._changeItem}
                                eventKey={value.id}>{value.text}</MenuItem>)
        }.bind(this));
        var title = this.state.selected == index ? this.props.defaultText : this.props.prefixText + (this.props.items[index].text + this.props.appendText);
        return (
            <DropdownButton title={title}
                            style={{height:"47px",margin:"0",backgroundColor:"white",border:"0 lightgray solid"}}
                            id={"default"}
                            noCaret={this.props.noCaret?true:false}>
                {list}
            </DropdownButton>
        )

    }
});

var Text = React.createClass({
    getInitialState: function () {
        return ({
            tipItems: [],
            tipHover: -1,
            selectedItem: ""
        })
    },
    updateTipItems: function (e) {
        this.setState({tipItems: ["10.9.0.170", "hypervisor"], selectedItem: e.target.value});
    },
    tipHover: function (index) {
        this.setState({tipHover: index});
    },
    itemSelected: function (value) {
        this.setState({selectedItem: value, tipItems: []});
    },
    formBlur: function () {
        setTimeout(function () {
            this.setState({tipItems: []});
        }.bind(this), 100);
    },
    render: function () {
        var tips = [];
        if (this.state.tipItems.length > 0) {
            this.state.tipItems.forEach(function (val, key) {
                tips.push(<div className="tipItems" onClick={this.itemSelected.bind(this,val)}
                               onMouseOver={this.tipHover.bind(this,key)} key={this.props.tip+key}
                               style={{cursor:"pointer",textAlign:"left",borderBottom:"thin #F0F0F0 solid",backgroundColor:this.state.tipHover==key?"#F0F0F0":""}}>{val}</div>)
            }.bind(this));
        }
        return (
            <OverlayTrigger placement="top"
                            overlay={<Tooltip id={this.props.tip}><strong>{this.props.tip}</strong></Tooltip>}>
                <Form inline style={{height:"47px",display:"inline-block",position:"relative"}}>
                    <FormGroup controlId="formControlsText" style={{marginTop:"-4px"}}>
                        <FormControl autoComplete={"off"} type="text" placeholder={this.props.placeholder}
                                     style={{height:"47px",border:"0 red solid",fontSize:"13px"}}
                                     value={this.state.selectedItem} onBlur={this.formBlur}
                                     onChange={this.updateTipItems}/>
                    </FormGroup>

                    <div
                        style={{zIndex:"100",display:this.state.tipItems.length > 0?"block":"none",width:"100%",boxShadow:"1px 1px 5px lightgray",backgroundColor:"white",padding:"10px",position:"absolute"}}>
                        {tips}
                    </div>
                </Form>
            </OverlayTrigger>

        )
    }
});

var TextOfNoTips = React.createClass({
    getInitialState: function () {
        return ({
            hoverStatus: false,
            focusStatus:false,
            value:5
        })
    },
    _hover: function () {
        this.setState({hoverStatus: true});
    },
    _mouseOut: function () {
        this.setState({hoverStatus: false});

    },
    _blur: function () {
        this.setState({focusStatus: false});
    },
    _focus: function () {
        this.setState({focusStatus: true});
    },
    onChange: function (e) {
      this.setState({value:e.target.value});
    },
    render: function () {
        var tips = [];
        var status=this.state.hoverStatus;
        if(this.state.focusStatus){
            status=true;
        }
        return (
            <OverlayTrigger placement="top"
                            overlay={<Tooltip id={this.props.tip}><strong>{this.props.tip}</strong></Tooltip>}>
                <Form inline style={{display:"inline-block",position:"relative"}}>
                    <FormGroup controlId="formControlsText" style={{marginTop:"-4px"}}>
                        <FormControl autoComplete={"off"} type="text" placeholder={this.props.placeholder}
                                     style={{border:status?"thin lightgray solid":"0 lightgray solid",fontSize:"13px",backgroundColor:status?"white":"transparent"}}
                                     value={this.state.value} onFocus={this._focus} onMouseOver={this._hover} onMouseOut={this._mouseOut} onBlur={this._blur}
                                     onChange={this.onChange}
                            />
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
            isNormal: true
        })
    },
    _hover: function () {
        this.setState({isNormal: false});
    },
    _click: function (type, text) {
        // TODO 保存点击的按钮
        AppAction.saveOperator(type, text);
        var curTool = "";
        if (type == 3) {
            if (type == 3) {
                setTimeout(function () {
                    MenuAction.changeViews("");
                }, 1);
                MenuAction.changeBreadcrumb(4, AppStore.getOperator());
            }
        } else if (type == 4) {
            MenuAction.changeBreadcrumb(4, "");
        } else if (type == 1) {
            MenuAction.changeBreadcrumb(4, AppStore.getOperator());
            setTimeout(function () {
                browserHistory.push("/configurationPage");
            },10);
        }else if (type == 0) {
            var obj=AppStore.getOperator();
            var o = {id:obj.id, name: "创建"+MenuStore.getBreadcrumbData()[2].breadcrumbName};
            switch (MenuStore.getBreadcrumbData()[2].breadcrumbID){
                case 221:
                case 222:
                case 223:
                case 224:
                    o = {id:obj.id, name: "创建"+MenuStore.getBreadcrumbData()[2].breadcrumbName};
                    MenuAction.changeBreadcrumb(4, o);
                    browserHistory.push("/createVCenterModal");
                    break;
                case 612:
                    o = {id:obj.id, name: "创建用户"};
                    MenuAction.changeBreadcrumb(4, o);
                    browserHistory.push("/createUser");
            }
        }
    },
    _leave: function () {
        this.setState({isNormal: true});

    },
    _lgClose: function (param) {
        if (param == "save") {
            alert("保存成功!");
        } else {
            var r = confirm("您的VCenter信息未保存，确定不保存吗？");
            if (r) {

            }
        }
    },
    text: function () {
        console.log(AppStore.getOperator());
    },
    render: function () {
        var style = this.state.isNormal ? this.state.normal : this.state.hover;
        return (
            <OverlayTrigger placement="top"
                            overlay={<Tooltip><strong><i className={icons[this.props.icon].icon}> {this.props.tip}</i></strong></Tooltip>}>
                <button onMouseOver={this._hover} onMouseLeave={this._leave}
                        onClick={this._click.bind(this,this.props.icon,this.props.label)} type="button"
                        className="btn btn-info btn-flat"
                        style={style}><span
                    style={{fontSize:"12px",marginTop:"-2px"}}>{this.props.label}</span>
                </button>

            </OverlayTrigger>

        )
    }
});

var MyDatePicker = React.createClass({
    hideDatePicker: function (param) {
        this.props.hideDatePicker(param);
    },
    componentDidMount: function () {
        $(".date").css("left", "-84px");

    },
    render: function () {
        return (
            <div style={{position:"relative"}}>
                <div style={{position:"relative",width:"150px",left:"84px",marginLeft:"10px",float:"left"}}>
                    <DateTimeField /></div>
                <div style={{position:"relative",width:"30px",float:"left",marginLeft:"10px",marginTop:"6px"}}>To</div>
                <div style={{position:"relative",width:"150px",left:"84px",float:"left",marginLeft:"-7px"}}>
                    <DateTimeField /></div>
                <div style={{position:"relative",float:"left"}}><ReactButton bsStyle="link"
                                                                             style={{border:"0 red solid"}}
                                                                             onClick={this.hideDatePicker.bind(this,"取消")}>取消</ReactButton>
                </div>
                <div style={{position:"relative",float:"left"}}><ReactButton bsStyle="link"
                                                                             style={{border:"0 red solid"}}
                                                                             onClick={this.hideDatePicker.bind(this,"保存")}>保存</ReactButton>
                </div>
            </div>
        )
    }
});


module.exports = {
    SelectTool,
    DropdownList,
    Text,
    TextOfNoTips,
    Button,
    MyDatePicker
};