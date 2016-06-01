/**
 * Application setting component, belong to system setting menu
 * Created by shiming
 */

var React = require('react');
var classNames = require('classnames');
var Card = require('material-ui/lib/card/card');
var AppStore = require('../../stores/AppStore');
var AppAction = require('../../actions/AppAction');
var Title = require('../Title');
var Modal = require('react-modal');
var Table = require('material-ui/lib/table/table');
var TableHeaderColumn = require('material-ui/lib/table/table-header-column');
var TableRow = require('material-ui/lib/table/table-row');
var TableHeader = require('material-ui/lib/table/table-header');
var TableRowColumn = require('material-ui/lib/table/table-row-column');
var TableBody = require('material-ui/lib/table/table-body');
var FlatButton = require('material-ui/lib/flat-button');
var assign = require('object-assign');

require('../../css/application.less');

Modal.setAppElement(document.getElementById('applicaton-modal'));

var Application = React.createClass({
    getInitialState: function () {
        return({tips: "", modalIsOpen: false, app: null});
    },

    openModal: function(app) {
        this.setState({app: app});
        this.setState({modalIsOpen: true});
    },

    closeModal: function() {
        this.setState({app: null});
        this.setState({modalIsOpen: false});
    },

    handleModalCloseRequest: function () {
        this.closeModal();
    },

    render: function () {
        var title = "应用设置";
        return (
            <div>
                <Title title={title}/>
                <div className="app-setting">
                    <Card>
                        <div className="app-list">
                            <AppList openModal={this.openModal}/>
                        </div>
                    </Card>
                    <div ref="tips" className="tips">
                        {this.state.tips}
                    </div>
                    <div className="add-app">
                        <FlatButton onClick={this.openModal} secondary={true}>添加</FlatButton>
                    </div>
                </div>
                <AppModal app={this.state.app} modalIsOpen={this.state.modalIsOpen} handleModalCloseRequest={this.handleModalCloseRequest} />
            </div>
        );
    }
});

var AppModal = React.createClass({

    getInitialState: function() {
        var app = {
            app_name: '',
            app_package: '',
            app_type: 'ios',
            app_scenarios: 'HaoYangMao'
        };
        return(app);
    },

    componentDidMount: function() {
    },

    componentWillReceiveProps: function(props) {
        var app = {};
        if (props.app) {
            app = {
                app_id: props.app.app_id,
                app_name: props.app.app_name,
                app_package: props.app.package_name,
                app_type: props.app.os_type,
                app_scenarios: props.app.scenarios
            };
        } else {
            app = {
                app_name: '',
                app_package: '',
                app_type: 'ios',
                app_scenarios: 'HaoYangMao'
            };
        }
        this.setState(app);
    },

    handleSubmitClicked: function (id) {
        if (this.props.app.tid) {
            this.handleUpdateClicked(id, this.props.app.tid)
        } else {
            this.handleSaveClicked()
        }
    },

    handleUpdateClicked: function (id, tid) {
        AppAction.update({
            app_id: id,
            tid: tid,
            app_package: this.refs.app_package.value,
            app_scenarios: this.refs.app_scenarios.value
        });
        this.props.handleModalCloseRequest();
    },

    handleSaveClicked: function () {
        AppAction.add({
            app_name: this.refs.app_name.value,
            app_package: this.refs.app_package.value,
            app_type:  this.refs.app_type.value,
            app_scenarios:  this.refs.app_scenarios.value
        });
        this.props.handleModalCloseRequest();
    },

    handleChange: function() {
        this.setState({
            app_name: this.refs.app_name.value,
            app_package: this.refs.app_package.value,
            app_type:  this.refs.app_type.value,
            app_scenarios:  this.refs.app_scenarios.value
        });
    },

    render: function() {
        var customStyle = {
            overlay: {
                zIndex: 10
            },
            content: {
                border: 'none'
            }
        };
        var opts = {};
        var title = '添加应用';
        if (this.state.app_id) {
            opts = {
                readOnly: 'readOnly',
                disabled: 'disabled'
            };
            title = '修改应用';
        };
        return (
                <Modal
                    className="Modal__Bootstrap modal-dialog"
                    closeTimeoutMS={150}
                    isOpen={this.props.modalIsOpen}
                    onRequestClose={this.props.handleModalCloseRequest}
                    style={customStyle}
                >
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" onClick={this.props.handleModalCloseRequest}>
                                <span aria-hidden="true">&times;</span>
                                <span className="sr-only">关闭</span>
                            </button>
                            <h4 className="modal-title">{title}</h4>
                        </div>
                        <div className="modal-body">
                            <form className="form-horizontal">
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">应用名</label>
                                    <div className="col-sm-9">
                                        <input className="form-control" ref="app_name" onChange={this.handleChange} value={this.state.app_name} placeholder="应用名" {...opts} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">类型</label>
                                    <div className="col-sm-9">
                                        <select value={this.state.app_type} onChange={this.handleChange} className="form-control" ref="app_type" {...opts}>
                                            <option value="ios">iOS</option>
                                            <option value="android">Android</option>
                                            <option value="website">Website</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">包名</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" value={this.state.app_package} onChange={this.handleChange} ref="app_package" placeholder="应用包名 com.example.app" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-sm-2 control-label">场景</label>
                                    <div className="col-sm-9">
                                        <select className="form-control" value={this.state.app_scenarios} onChange={this.handleChange} ref="app_scenarios">
                                            <option value="">默认</option>
                                            <option value="HaoYangMao">推广套利欺诈</option>
                                            <option value="TopUp">游戏代充欺诈</option>
                                            <option value="publisher_fraud">广告流量欺诈</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <FlatButton onClick={this.props.handleModalCloseRequest}>取消</FlatButton>
                            <FlatButton onClick={this.handleSubmitClicked.bind(null, this.state.app_id)} secondary={true}>提交</FlatButton>
                        </div>
                      </div>
                </Modal>
        );
    }
});

var AppList = React.createClass({
    getInitialState: function() {
        return({apps: AppStore.getAll()._application});
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    modifyApp: function(app) {
        this.props.openModal(app);
    },
    tableBody: function(apps) {
        var list = []
        apps.forEach(function(app, index) {
            list.push(
                <TableRow hoverable={true} key={index}>
                    <TableRowColumn>
                        <i className="fa fa-archive"></i>{app.app_name}
                    </TableRowColumn>
                    <TableRowColumn style={{ width: 320 }}>
                        <i className="fa fa-key"></i>{app.tid}
                    </TableRowColumn>
                    <TableRowColumn>
                        {app.scenarios_display}
                    </TableRowColumn>
                    <TableRowColumn>
                        {app.status}
                    </TableRowColumn>
                    <TableRowColumn>
                        <FlatButton onClick={AppAction.del.bind(null, app.app_id)} primary={true}>删除</FlatButton>
                    </TableRowColumn>
                </TableRow>
            );
        }.bind(this));
        return list;
    },
    _onChange: function () {
        this.setState({apps: AppStore.getAll()._application});
    },
    render: function () {
        var apps = this.state.apps;
        var list = this.tableBody(apps);
        return (
            <div>
                <Table selectable={false}>
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>应用名</TableHeaderColumn>
                            <TableHeaderColumn style={{ width: 320 }}>API Key</TableHeaderColumn>
                            <TableHeaderColumn>欺诈场景</TableHeaderColumn>
                            <TableHeaderColumn>集成状态</TableHeaderColumn>
                            <TableHeaderColumn>操作</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false} showRowHover={true}>
                        {list}
                    </TableBody>
                </Table>
            </div>
        )
    }
});

module.exports = Application;
