var Spinner = React.createClass({
	getInitialState:function() {
        return {
            max:100,
            min:0+"",
            step:5,
            disable:false,
            keyboardEnable:true,
            eventType:'blur'
        };
    },
    run:function() {
        var state = {
            max:this.refs.max.getValue(),
            min:this.refs.min.getValue(),
            step:this.refs.step.getValue(),
            disable:this.refs.disable.isSelected(),
            keyboardEnable:this.refs.keyboard.isSelected()
        };
        this.setState(state);
    },
    render:function() {
        return <div className="example-spinner">
        	<h2 className="title">数字选择器<span>Spinner</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
                <h4 className="final-title">配置</h4>
                <div className="spinner-config">
                    <div className="mb10">
                        <label>最大值</label><RUI.Input ref="max" value={this.state.max} />
                    </div>
                    <div className="mb10">
                        <label>最小值</label><RUI.Input ref="min" value={this.state.min} />
                    </div>
                    <div className="mb10">
                        <label>递进</label><RUI.Input ref="step" value={this.state.step} />
                    </div>
                    <div className="mb10">
                    	<RUI.Checkbox ref="keyboard" selected={this.state.keyboardEnable}>键盘上下键</RUI.Checkbox>
                    	<RUI.Checkbox ref="disable" selected={this.state.disable}>禁用</RUI.Checkbox>
                    </div>
                    <div className="mb10">
                        <RUI.Button className="primary" onClick={this.run}>重新渲染数字选择器</RUI.Button>
                    </div>
                </div>
                <h4 className="final-title">运行效果</h4>
                <div>
                    <RUI.Spinner {...this.state} />
                </div>
                <div style={{marginTop:'20px'}}>
                    <RUI.Spinner type="slider" {...this.state} />
                </div>
            </div>
        </div>
    }
});
export {Spinner};