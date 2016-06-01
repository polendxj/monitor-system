/**
 * Created by jingpeng on 16/3/8.
 */
var React = require("react");

var MenuItem = React.createClass({
    render: function () {
        return (
            <li onClick={this.props.onChange.bind(null,this.props.value,this.props.index)}>
                <a href="javascript:void(0)">
                    <div className={this.props.clazz}></div>
                    {this.props.display}
                </a>
            </li>
        )
    }
});

module.exports = MenuItem;