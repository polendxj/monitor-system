/**
 * Created by Captain on 2016/6/2.
 */
var React = require("react");
var VCenter = require('../../../VCenter/VCenter');

var MainContent = React.createClass({
    render: function () {
        return (
            <div className="cl-mcont" style={{padding:"10px 0px"}}>
                <div style={{padding:"0px 0px 0px 6px"}}>
                    <VCenter/>
                    <VCenter/>
                    <VCenter/>
                    <VCenter/>
                    <VCenter/>
                </div>
            </div>
        )
    }
});

module.exports = MainContent;