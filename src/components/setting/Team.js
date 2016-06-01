/**
 * Team setting component, belong to system setting menu
 * Created by shiming
 */

var React = require('react');
var classNames = require('classnames');
var TeamStore = require('../../stores/TeamStore');
var TeamAction = require('../../actions/TeamAction');
var Title = require('../Title');
var Card = require('material-ui/lib/card/card');
var FlatButton = require('material-ui/lib/flat-button');
require('../../css/team.less');

var Team = React.createClass({
    getInitialState: function () {
        return({tips: ""});
    },
    componentDidMount: function () {
        TeamStore.addStatusChangeListener(this._onStatusChange);
    },
    componentWillUnmount: function () {
        TeamStore.removeStatusChangeListener(this._onStatusChange);
    },
    invite: function () {
        var email = this.refs.email.value;
        if (email) {
            TeamAction.invite(email);
        } else {
            this.setState({tips: "邮箱为空"});
        }
    },
    _onStatusChange: function () {
        var code = TeamStore.getStatus();
        var email = this.refs.email.value;
        if (code === "ok") {
            this.setState({tips: "成功添加: "+email});
        } else {
            switch (code) {
                case "email.exists":
                    this.setState({tips: "邮箱已经存在: "+email});
                    break;
                default:
                    this.setState({tips: "没有权限"});
                    break;
            };
        }
    },
    render: function () {
        var title = "团队设置";
        return (
            <div>
                <Title title={title}/>
                <Card>
                    <div className="team-setting">
                        <div className="user-list">
                            <UserList />
                        </div>
                        <div ref="tips" className="tips">
                            {this.state.tips}
                        </div>
                        <div className="add-user">
                            <input ref="email" type="text" name="email" className="email" placeholder="Your Email" />
                            <FlatButton style={{marginLeft: 5}} onClick={this.invite} secondary={true}>邀请</FlatButton>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
});

var UserList = React.createClass({
    getInitialState: function() {
        return ({users: []});
    },
    componentDidMount: function () {
        TeamStore.addChangeListener(this._onChange);
        TeamAction.init();
    },
    componentWillUnmount: function () {
        TeamStore.removeChangeListener(this._onChange);
    },
    _onChange: function () {
        this.setState({users: TeamStore.getAll()});
    },
    render: function () {
        var users = this.state.users;
        var list = [];
        users.forEach(function(user, index) {
            list.push(<UserItem {...user} key={index} />);
        });
        return (
            <div>
                {list}
            </div>
        )
    }
});

var UserItem = React.createClass({

    _delete: function () {
        TeamAction.del(this.props.id);
    },

    render: function () {
        var statusClass = classNames("status", "col-xs-2", {
            "green": this.props.status
        });
        var regurl = "/register/" + this.props.code;
        return (
            <div className="row">
                <div className="email col-xs-4" style={{fontSize: 12}}>
                    <i className="fa fa-user"></i>{this.props.email}
                </div>
                <div className="col-xs-4" style={{fontSize: 12}}>
                    <i className="fa fa-key"></i>
                    <a href={regurl} target="_blank">{this.props.code}</a>
                </div>
                <div className={statusClass}>
                    {this.props.status ? "已激活" : "未激活"}
                </div>
                <div className="operator col-xs-2">
                    <FlatButton onClick={this._delete} primary={true}>删除</FlatButton>
                </div>
            </div>
        );
    }
});

module.exports = Team;
