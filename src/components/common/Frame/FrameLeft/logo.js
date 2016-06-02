/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");

var Logo = React.createClass({
    render: function () {
        return (
            <div className="sidebar-logo">
                <div className="logo" onClick={this.props._collapsedMenu}>

                </div>
                <div className="title"
                     style={{width:"138px",height:"40px",backgroundColor:"#45A2E1",float:"right",display:this.props.menuCollapsed?"none":"block"}}>
                    <div style={{height:"60%",fontSize:"20px",color:"white"}}>中国电信</div>
                    <div style={{height:"40%",fontSize:"12px",color:"white"}}>&nbsp;服务监控平台<span
                        style={{fontStyle:"italic",color:"#D3D3D3"}}>&nbsp;Alpha 0.1</span>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = Logo;
