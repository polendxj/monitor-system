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

require('jquery');

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
    render: function () {
        return (
            <DropdownButton title={"Group : zabbix server"}
                            style={{height:"47px",margin:"0",backgroundColor:"white",border:"0 lightgray solid"}}
                            id={"default"}>
                <MenuItem eventKey="1">Action</MenuItem>
                <MenuItem eventKey="2">Another action</MenuItem>
                <MenuItem eventKey="3" active>Active Item</MenuItem>
                <MenuItem divider/>
                <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
        )

    }
});

var Text = React.createClass({
    render: function () {
        return (
            <Form inline style={{height:"47px",display:"inline-block"}}>
                <FormGroup controlId="formControlsText" style={{marginTop:"-4px"}}>
                    <FormControl type="text" placeholder="请输入服务器IP"/>
                </FormGroup>
            </Form>
        )
    }
});

var Button = React.createClass({
    getInitialState: function () {
        return ({
            normal:{float:"right",height:"47px",backgroundColor:"white",color:"#45A2E1",marginTop:"-9px"},
            hover:{float:"right",height:"47px",backgroundColor:"#45A2E1",color:"white",marginTop:"-9px"},
            isNormal:true
        })
    },
    _hover: function () {
        this.setState({isNormal:false});
    },
    _leave: function () {
        this.setState({isNormal:true});

    },
    render: function () {
        var style=this.state.isNormal?this.state.normal:this.state.hover;
        return (
            <button onMouseOver={this._hover} onMouseLeave={this._leave} type="button" className="btn btn-info btn-flat"
                    style={style}><span
                style={{fontSize:"12px",marginTop:"-2px"}}>添加</span></button>
        )
    }
});

module.exports = {
    SelectTool,
    DropdownList,
    Text,
    Button
};