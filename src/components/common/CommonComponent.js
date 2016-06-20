/**
 * Created by jingpeng on 16/6/20.
 */
var React = require('react');

var Loading = React.createClass({
    render: function () {
        return (
            <div style={{textAlign:"center"}}><img src="imgs/loading.gif" style={{width:"150px",height:"150px;"}}/>
            </div>
        )
    }
});

module.exports={
    Loading
};