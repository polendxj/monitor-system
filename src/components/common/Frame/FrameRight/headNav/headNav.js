/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var IpSearch = require('./ipSearch');
var NavButton = require('./navButton');
var MenuTool = require('./menuTool');

var HeadNav = React.createClass({
    render: function () {
        return (
            <div id="head-nav" className="navbar navbar-default" style={{height:"89px"}}>
                <div style={{height:"41px",borderBottom:"thin #F0F0F0 solid"}}>
                    <div className="container-fluid">
                        <div className="navbar-collapse">
                            <IpSearch />
                            <NavButton />
                        </div>
                    </div>
                </div>
                <MenuTool />

            </div>
        )
    }
});

module.exports = HeadNav;