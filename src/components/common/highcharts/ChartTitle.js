/**
 * Created by jingpeng on 16/6/15.
 */
var React = require('react');
var Checkbox = require('react-bootstrap').Checkbox;

var ChartTitle = React.createClass({
    _trashClick: function () {
        this.props._trashClick();
    },
    _detailClick: function () {
        this.props._detailClick();
    },
    _checkBoxClick: function (index) {
        this.props._checkBoxClick(index);

    },
    render: function () {
        return (
            <div style={{height:"20px",backgroundColor:"#F3FAFF"}}>
                <div style={{display:"inline-block",marginLeft:"5px"}}>{this.props.title}</div>
                <Checkbox id={"checkBox"+this.props.index} style={{display:this.props.checkBox?"inline-block":"none",margin:"0 0 0 15px"}} onClick={this._checkBoxClick.bind(this,this.props.index)}>实时数据</Checkbox>
                <div style={{display:"inline-block",float:"right"}}>
                    <i className="fa fa-list-alt" style={{marginRight:"8px"}} onClick={this._detailClick}></i>
                    <i className="fa fa-trash-o" style={{marginRight:"5px"}} onClick={this._trashClick}></i>
                </div>
            </div>
        )
    }
});

module.exports = ChartTitle;