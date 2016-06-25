/**
 * Created by Captain on 2016/6/19.
 */
var React = require("react");
var Jquery = require("jquery");
var Table = require('material-ui/lib/table/table');
var TableHeader = require('material-ui/lib/table/table-header');
var TableRow = require('material-ui/lib/table/table-row');
var TableHeaderColumn = require('material-ui/lib/table/table-header-column');
var TableBody = require('material-ui/lib/table/table-body');
var TableRowColumn = require('material-ui/lib/table/table-row-column');

var ChartDataView = React.createClass({
    getInitialState: function () {
        return ({
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: false,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: false,
            showCheckboxes: false,
            height: ''
        })
    },
    render: function () {
        var dataTitle=this.props.dataTitle;
        return (
            <div id="monitorItemsPanel" className="col-sm-6 col-md-5 col-lg-4" style={{padding:"10px 0 0 5px"}}>
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    >
                    <TableBody
                        displayRowCheckbox={this.state.showCheckboxes}
                        deselectOnClickaway={this.state.deselectOnClickaway}
                        showRowHover={this.state.showRowHover}
                        stripedRows={this.state.stripedRows}
                        >
                        {this.props.viewData.map((row, index) => (
                            <TableRow key={index} selected={row.selected} style={{border:"0 red solid",backgroundColor:"white"}}>
                                <TableRowColumn  style={{width:"32%",textAlign:"center",padding:"5px 0 5px 0",border:"0 red solid",fontSize:"10px"}}>{row.name}</TableRowColumn>
                                <TableRowColumn  style={{width:"17%",textAlign:"center",padding:"5px 0 5px 0",border:"0 red solid"}}>{row.avg}</TableRowColumn>
                                <TableRowColumn  style={{width:"17%",textAlign:"center",padding:"5px 0 5px 0",border:"0 red solid"}}>{row.max}</TableRowColumn>
                                <TableRowColumn  style={{width:"17%",textAlign:"center",padding:"5px 0 5px 0",border:"0 red solid"}}>{row.min}</TableRowColumn>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        )
    }
});

module.exports = ChartDataView;