/**
 * Created by Captain on 2016/6/17.
 */
var React = require("react");
var ReactDOM = require("react-dom");
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
var HelpBlock = require("react-bootstrap").HelpBlock;
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuAction = require('../../../../actions/MenuAction');
var MenuStore = require('../../../../stores/MenuStore');
var UsersAction = require('../../../../actions/UsersAction');
var UsersStore = require('../../../../stores/UsersStore');

var UpdateUser = React.createClass({
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
                {id: 0, type: 3, roleName: "超级管理员"},
                {id: 1, type: 2, roleName: "普通管理员"}
            ],
            editData:UsersStore.getEditUserData(),
            helpState:false
        })
    },
    _click: function () {
        console.log(this.state.editData);
        var userData={};
        var password=ReactDOM.findDOMNode(this.refs.password).value;
        var confirmPassword=ReactDOM.findDOMNode(this.refs.confirmPassword).value;
        var username=ReactDOM.findDOMNode(this.refs.username).value;
        var type=ReactDOM.findDOMNode(this.refs.type).value;
        var id = this.state.editData.userid;
        userData['username']=username;
        userData['type']=type;
        if(password!=""&&password!=null){
            userData['password']=password;
        }
        if(!this.state.helpState){
            console.log(userData);
            UsersAction.updateUser(id,userData);
        }
    },
    _blur: function () {
        var password=ReactDOM.findDOMNode(this.refs.password).value;
        var confirmPassword=ReactDOM.findDOMNode(this.refs.confirmPassword).value;
        if (password == confirmPassword) {
            this.setState({helpState: false});
        } else {
            this.setState({helpState: true});
        }
    },
    render: function () {
        var roleSelect = [];
        this.state.roleList.forEach(function (role, idx) {
            roleSelect.push(
                <option key={role.id} value={role.type}>{role.roleName}</option>
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
                            <FormControl controlId="userName" ref="username" defaultValue={this.state.editData.username}/>
                        </Col>
                    </FormGroup>
                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            权限:
                        </Col>
                        <Col sm={2}>
                            <FormControl componentClass="select" ref="type" defaultValue={this.state.editData.type}>
                                {roleSelect}
                            </FormControl>
                        </Col>
                    </FormGroup>
                    <FormGroup validationState={this.state.helpState?"error":"default"}>
                        <Col componentClass={ControlLabel} sm={2}>
                            密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl type="password" controlId="password" ref="password"/>
                        </Col>
                    </FormGroup>
                    <FormGroup validationState={this.state.helpState?"error":"default"}>
                        <Col componentClass={ControlLabel} sm={2}>
                            确认密码:
                        </Col>
                        <Col sm={2}>
                            <FormControl type="password" controlId="confirmPassword" ref="confirmPassword" onBlur={this._blur}/>
                        </Col>
                        <Col><HelpBlock
                            style={{display:this.state.helpState?"block":"none"}}>密码不一致，请重新输入</HelpBlock></Col>
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

module.exports = UpdateUser;