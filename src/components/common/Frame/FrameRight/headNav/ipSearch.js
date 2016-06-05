/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var CreateVCenterModal = require("../../../VCenter/createVCenterModal");

var IpSearch = React.createClass({
    getInitialState() {
        return {lgShow: false };
    },
    lgClose: function () {
        this.setState({ lgShow: false })
    },
    render: function () {

        return (
            <div
                style={{width:"60%",height:"40px",position:"absolute",marginTop:"3px",marginLeft:"-10px"}}>
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="请输入主机IP或主机名..."/>
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="button" onClick={()=>this.setState({lgShow:true})}>
                            <i className="fa fa-search"></i>
                        </button>
                        <CreateVCenterModal show={this.state.lgShow} onHide={this.lgClose}/>
                    </span>
                </div>
            </div>
        )
    }
});

module.exports = IpSearch;