/**
 * Created by Captain on 2016/6/21.
 */
var React = require("react");
var ReactDOM = require("react-dom");
require("jquery");
var browserHistory = require('react-router').browserHistory;
var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var Macro = require("./macros");
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');
var VirtualMonitorAction = require("../../../actions/VirtualMonitorAction");
var VirtualMonitorStore = require("../../../stores/VirtualMonitorStore");
var MenuTool = require("../Frame/FrameRight/headNav/menuTool");

var EditVCenter = React.createClass({
    render: function () {
        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <MenuTool />
                </div>
                <div>
                    <Content />
                </div>
            </div>
        )
    }
});
var Content = React.createClass({
    getInitialState: function () {
        return ({
            editVcenter:VirtualMonitorStore.getEditVcenterData()
        })
    },
    _click: function () {
        var vcenter={};
        var hostName=ReactDOM.findDOMNode(this.refs.hostName).value;
        var ip=ReactDOM.findDOMNode(this.refs.ip).value;
        var macro1=ReactDOM.findDOMNode(this.refs.macro1).value;
        var macro2=ReactDOM.findDOMNode(this.refs.macro2).value;
        var macro3=ReactDOM.findDOMNode(this.refs.macro3).value;
        var macroValue1=ReactDOM.findDOMNode(this.refs.macroValue1).value;
        var macroValue2=ReactDOM.findDOMNode(this.refs.macroValue2).value;
        var macroValue3=ReactDOM.findDOMNode(this.refs.macroValue3).value;
        var id = this.state.editVcenter.id;
        vcenter['name']=hostName;
        vcenter['ip']=ip;
        vcenter['macros']=[];
        if(macro1!=""&&macroValue1!=""){
            vcenter['macros'].push({"macro": macro1, "value": macroValue1});
        }
        if(macro2!=""&&macroValue2!=""){
            vcenter['macros'].push({"macro": macro2, "value": macroValue2})
        }
        if(macro3!=""&&macroValue3!=""){
            vcenter['macros'].push({"macro": macro3, "value": macroValue3})
        }
        VirtualMonitorAction.updateVCenter(id,vcenter);
    },
    render: function () {
        return (
            <div>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            主机名
                        </Col>
                        <Col sm={4}>
                            <FormControl ref="hostName" controlId="hostName" defaultValue={this.state.editVcenter.name}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            IP地址
                        </Col>
                        <Col sm={4}>
                            <FormControl ref="ip" controlId="ipAddress"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col componentClass={ControlLabel} sm={3} style={{textAlign:"left"}}>
                            MACRO
                        </Col>
                        <Col componentClass={ControlLabel} sm={3} style={{paddingLeft:"26px",textAlign:"left"}}>
                            值
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col sm={3}>
                            <FormControl ref="macro1" controlId="macro1" placeholder="{$MACRO}"/>
                        </Col>
                        <Col componentClass={ControlLabel} style={{width: "12px",float: "left"}}>
                            {"⇒"}
                        </Col>
                        <Col sm={3}>
                            <FormControl  ref="macroValue1" controlId="macroValue1" placeholder="value"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col sm={3}>
                            <FormControl ref="macro2" controlId="macro2" placeholder="{$MACRO}"/>
                        </Col>
                        <Col componentClass={ControlLabel} style={{width: "12px",float: "left"}}>
                            {"⇒"}
                        </Col>
                        <Col sm={3}>
                            <FormControl  ref="macroValue2" controlId="macroValue2" placeholder="value"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col sm={3}>
                            <FormControl ref="macro3" controlId="macro3" placeholder="{$MACRO}"/>
                        </Col>
                        <Col componentClass={ControlLabel} style={{width: "12px",float: "left"}}>
                            {"⇒"}
                        </Col>
                        <Col sm={3}>
                            <FormControl  ref="macroValue3" controlId="macroValue3" placeholder="value"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={5}>
                        </Col>
                        <Col sm={3} style={{paddingRight:"4px"}}>
                            <Button onClick={this._click} style={{color:"white",backgroundColor:"#54ADE9",float:"right"}}>保存</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
});

module.exports = EditVCenter;