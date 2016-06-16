/**
 * Created by Captain on 2016/6/14.
 */
var React = require("react");
var browserHistory = require('react-router').browserHistory;
var Button = require("react-bootstrap").Button;
var Form = require("react-bootstrap").Form;
var FormGroup = require("react-bootstrap").FormGroup;
var FormControl = require("react-bootstrap").FormControl;
var ControlLabel = require("react-bootstrap").ControlLabel;
var Col = require("react-bootstrap").Col;
var HelpBlock = require("react-bootstrap").HelpBlock;
var Breadcrumb = require("react-bootstrap").Breadcrumb;
var MenuStore = require('../../../stores/MenuStore');
var MenuAction = require('../../../actions/MenuAction');

var ConfigurationPage = React.createClass({
    getInitialState: function () {
        return ({
            breadcrumbDataList: MenuStore.getBreadcrumbData()
        })
    },
    componentDidMount: function () {
        MenuStore.addChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    componentWillUnmount: function () {
        MenuStore.removeChangeListener(MenuStore.events.change_breadcrumb, this._changeBreadcrumbData);
    },
    _changeBreadcrumbData: function () {
        this.setState({breadcrumbDataList: MenuStore.getBreadcrumbData()});
    },
    _redirect: function (idx) {
        if(idx==0||idx==1){
            MenuAction.changeBreadcrumb(4,"");
            browserHistory.push("/list");
        }else if(idx==3||idx==2) {
            MenuAction.changeBreadcrumb(idx+2,"");
            browserHistory.push("/list");
        }
    },
    render: function () {
        var breadcrumbs = [];
        var length=this.state.breadcrumbDataList.length-1;
        this.state.breadcrumbDataList.forEach(function (breadcrumbData, idx) {
            if (idx < length) {
                breadcrumbs.push (
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#">
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            } else {
                breadcrumbs.push (
                    <Breadcrumb.Item key={breadcrumbData.breadcrumbID} onClick={this._redirect.bind(this,idx)} href="#" active>
                        {breadcrumbData.breadcrumbName}
                    </Breadcrumb.Item>
                )
            }
        }.bind(this));
        return (
            <div style={{backgroundColor:"white",padding:"3px 0 30px 0"}}>
                <div style={{height:"47px"}}>
                    <div className="col-sm-7 col-md-7 col-lg-7"
                         style={{height:"30px",marginTop:"2px",fontSize:"12px",padding:"2px 0 0 6px"}}>
                        <div style={{display:"inline-block",paddingRight:"20px"}}>
                            <Breadcrumb>
                                {breadcrumbs}
                            </Breadcrumb>
                        </div>
                    </div>
                </div>
                <div>
                        配置页
                </div>
            </div>

        )
    }
});

module.exports = ConfigurationPage;
