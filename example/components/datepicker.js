var timer = Date.now();
var Datepicker = React.createClass({
	getInitialState:function() {
        this.changeFormatter = new RUI.DateFormatter("Y/m/d");
        this.formatter = new RUI.DateFormatter("Y-m-d");
        return {
            val:""
        };
    },
    setChange : function(e) {
        console.dir(e.data);
        this.setState({
            time : e.data
        });
    },
	getSinglePickerValue:function(ref) {
		var selectTime = new Date(parseInt(JSON.stringify(this.refs[ref].getValue())));
		var month = selectTime.getMonth() + 1;
		var day = selectTime.getDate();
		month = month < 10 ? "0" + month : month;
		day = day < 10 ? "0" + day : day;
        RUI.DialogManager.alert(selectTime.getFullYear() + "-" + month + "-" + day);
    },
    getSinglePickerValue:function(ref) {
    	var selectTime = new Date(parseInt(JSON.stringify(this.refs[ref].getValue())));
		var month = selectTime.getMonth() + 1,
			day = selectTime.getDate(),
			hour = selectTime.getHours(),
			minute = selectTime.getMinutes(),
			second = selectTime.getSeconds();
        RUI.DialogManager.alert(selectTime.getFullYear() + "-" + this.formatTime(month) + "-" + this.formatTime(day) + " " + this.formatTime(hour) + "-" + this.formatTime(minute) + "-" + this.formatTime(second));
    },
    formatTime:function(time) {
    	return time < 10 ? "0" + time : time;
    },
    setRangePickerValue:function() {
        this.refs.rangeDatePicker.setValue({
            startValue:Date.now() - 86400 * 1000 * 90,
            endValue:Date.now()
        });
    },
    render:function() {
        return <div className="example-datepicker">
        	<h2 className="title">日历<span>Datepicker</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
            	<h4 className="final-title">年月日</h4>
                <div>
                    <RUI.DatePicker ref="singleDatePicker" />
                    <RUI.Button onClick={this.getSinglePickerValue.bind(this, 'singleDatePicker')}>获取选中值</RUI.Button>
                </div>
                <h4 className="final-title">年月日时分秒</h4>
                <div>
                    <RUI.DatePicker ref="singleDatetimePicker" onChange={this.setChange} showTime={true} />
                    <RUI.Button onClick={this.getSinglePickerValue.bind(this, 'singleDatetimePicker')}>获取选中值</RUI.Button>
                </div>
                <h4 className="final-title">嵌套Tooltip</h4>
                <div>
                    <RUI.DatePicker formatter={this.formatter} range={false}>
                        <RUI.Tooltip align="top-center" trigger="click">嵌套使用，click触发</RUI.Tooltip>
                    </RUI.DatePicker>
                </div>
                <h4 className="final-title">改变显示格式</h4>
                <div>
                    <RUI.DatePicker formatter={this.changeFormatter} onChange={this.datePickerChange} />
                </div>
                <h4 className="final-title">开始结束</h4>
                <div>
                    <RUI.DatePicker startValue={''} endValue={''} formatter={new RUI.DateFormatter("Y-m-d")} range={true} onChange={this.datePickerChange} />
                </div>
                <h4 className="final-title">设置外层范围</h4>
                <div>
                    <RUI.DatePicker ref="rangeDatePicker" range={true} />
                    <RUI.Button onClick={this.setRangePickerValue}>三个月内</RUI.Button>
                </div>
                <h4 className="final-title">禁用</h4>
                <div>
                    <RUI.DatePicker disable={true} />
                </div>
            </div>
        </div>;
    }
});
export {Datepicker};
