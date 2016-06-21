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

var NoData = React.createClass({
    render: function () {
        return (
            <div style={{textAlign:"center",fontSize:"20px",padding:"50px",color:"#ddd",height:"auto"}}>
                <div>
                    <i className="fa fa-ban"></i>
                </div>
                <div>{this.props.text?this.props.text:"未查询到任何数据"}</div>
            </div>
        )
    }
});

module.exports={
    Loading,
    NoData
};