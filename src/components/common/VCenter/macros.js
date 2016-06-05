/**
 * Created by Captain on 2016/6/5.
 */
var React = require("react");
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;

var Macro = React.createClass({
    render: function () {
        return (
            <FormGroup controlId="formMacro">
                <Col sm={2}>
                </Col>
                <Col sm={3}>
                    <FormControl placeholder="{$MACRO}"/>
                </Col>
                <Col componentClass={ControlLabel} style={{width: "12px",float: "left"}}>
                    {"⇒"}
                </Col>
                <Col sm={3}>
                    <FormControl placeholder="value"/>
                </Col>
                <Col sm={1}>
                    <button type="button" className="btn btn-default" style={{border:"0px"}}><a>delete</a></button>
                </Col>
            </FormGroup>
        )
    }
});

module.exports = Macro;