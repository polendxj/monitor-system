/**
 * Created by Captain on 2016/6/18.
 */
var React = require("react");
require("jquery");
var browserHistory = require('react-router').browserHistory;
var MenuTool = require("../../Frame/FrameRight/headNav/menuTool");
var Modal = require("react-bootstrap").Modal;
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuAction = require('../../../../actions/MenuAction');
var MenuStore = require('../../../../stores/MenuStore');

var UpdatePwd = React.createClass({
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
    _click: function (type) {

    },
    render: function () {
        return (
            <div>
                <Form horizontal>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            用户名:
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="userName"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            原密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="oldPassword"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            新密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="newPassword"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            确认密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="confirmPassword"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col sm={2}>
                            <Button onClick={this._click} style={{color:"white",backgroundColor:"#54ADE9",float:"right"}}>修改</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
});

module.exports = UpdatePwd;