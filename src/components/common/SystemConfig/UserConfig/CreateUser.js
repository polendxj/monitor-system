/**
 * Created by Captain on 2016/6/17.
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

var CreateUser = React.createClass({
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
            roleList: [
                {id: 0, roleLevel: 0, roleName: "超级管理员"},
                {id: 1, roleLevel: 1, roleName: "普通管理员"},
                {id: 2, roleLevel: 2, roleName: "普通用户"}
            ]
        })
    },
    _click: function (type) {
        if (type == "save") {

        } else {
            var r = confirm("您的用户信息未保存，确定不保存吗？");
            if (r) {
                browserHistory.push("/userList");
            }
        }
    },
    render: function () {
        var roleSelect = [];
        this.state.roleList.forEach(function (role, idx) {
            roleSelect.push(
                <option key={role.id} value={role.roleLevel}>{role.roleName}</option>
            )
        });
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
                            权限:
                        </Col>
                        <Col sm={2}>
                            <FormControl componentClass="select">
                                {roleSelect}
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            性别:
                        </Col>
                        <Col sm={1}>
                            <FormControl componentClass="select">
                                <option value="m">男</option>
                                <option value="f">女</option>
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl type="password" controlId="password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            确认密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl type="password" controlId="confirmPassword"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            邮箱:
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="mail"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            电话:
                        </Col>
                        <Col sm={2}>
                            <FormControl controlId="phone"/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col sm={2}>
                        </Col>
                        <Col sm={2}>
                            <Button onClick={this._click}
                                    style={{color:"white",backgroundColor:"#54ADE9",float:"right"}}>保存</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        )
    }
});

module.exports = CreateUser;