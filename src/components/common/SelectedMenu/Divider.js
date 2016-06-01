/**
 * Created by jingpeng on 16/3/8.
 */
var React = require("react");

var Divider = React.createClass({
    render: function () {
        return (
            <li role="separator" className="divider"></li>
        )
    }
});

module.exports = Divider;