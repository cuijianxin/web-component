//import '../dist/bundle.js';
import {Button} from './components/button.js';
import {CheckBox} from './components/checkbox.js';
import {Datepicker} from './components/datepicker.js';
import {Dialog} from './components/dialog.js';
import {Input} from './components/input.js';
import {Loading} from './components/loading.js';
import {Pagination} from './components/pagination.js';
import {Radio} from './components/radio.js';
import {Select} from './components/select.js';
import {Spinner} from './components/spinner.js';
import {Table} from './components/table.js';
import {Tooltip} from './components/tooltip.js';

var TreeItem = React.createClass({
	clickHandler:function(event) {
        ReactDOM.render(this.props.reactObj, document.getElementById('content'));
        $(".nav-node").removeClass("nav-checked");
        $(event.target).addClass("nav-checked");
 	},
	render:function() {
        return <div className="nav-node" onClick={this.clickHandler}>{this.props.name}</div>;;
    }
});
var Tree = React.createClass({
	getData:function() {
		return  [
			{name:"按钮", reactObj: <Button />},
			{name:"输入框", reactObj: <Input />},
			{name:"数字调节器", reactObj: <Spinner />},
			{name:"下拉选框", reactObj: <Select />},
			{name:"分页", reactObj: <Pagination />},
			{name:"弹出层", reactObj: <Dialog />},
			{name:"提示", reactObj: <Tooltip />},
			{name:"多选", reactObj: <CheckBox />},
			{name:"单选", reactObj: <Radio />},
			{name:"表格", reactObj: <Table />},
			{name:"日历", reactObj: <Datepicker />},
			{name:"加载", reactObj: <Loading />}
		];
	},
	componentDidMount:function() {
		$(".nav-node:eq(0)").addClass("nav-checked");
	},
	render:function() {
        var data = this.getData();
        return <div>
        	{
                data.map(function(item){  
                    return <TreeItem key={item.name} name={item.name} reactObj={item.reactObj} />
                })  
            }
        </div>;
    }
});
ReactDOM.render(<Tree />, document.getElementById("tree"));
ReactDOM.render(<CheckBox />, document.getElementById('content'));
