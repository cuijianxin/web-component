var Input = React.createClass({
	getInitialState:function() {
        return {
            orgContent:"初始文本内容"
        }
    },
    onInputChange:function(e) {
        RUI.DialogManager.alert("触发change事件，输入值:" + e.target.value, "提示");
    },
    onEnterHandler:function(e) {
        RUI.DialogManager.alert("回车事件，输入值:" + e.target.value, "提示");
    },
    customMaxLength:function(val) {
        if(!val) {
            return 140;
        }
        var len = 0;
        for (var i = 0; i < val.length; i++) {
            var a = val.charAt(i);
            if (a.match(/[^\x00-\xff]/ig) != null)
            {
                len += 2;
            }
            else
            {
                len += 1;
            }
        }
        return Math.max(0, 140 - len);
    },
    render:function() {
        return <div className="example-input">
        	<h2 className="title">输入框<span>Input</span></h2>
        	<h3 className="sub-title">演示</h3>
        	<div className="example">
            	<h4 className="final-title">输入框</h4>
            	<div>
                    <RUI.Input value={this.state.orgContent} onChange={this.onInputChange} /><br/>
                    <RUI.Input mode="static" value={"不可修改"}/><br/>
                    <RUI.Input disable={true} value={"置灰"}/><br/>
                    <RUI.Input className="medium" placeholder="提示文本"/><br/>
                    <RUI.Input grid={24} onEnter={this.onEnterHandler} />
                </div>
                <h4 className="final-title">文本域</h4>
            	<div>
                    <RUI.Textarea value={this.state.init} ref="async" />
                </div>
                <h4 className="final-title">字数提示</h4>
                <div>
                    <RUI.Textarea maxLength={140} />
                </div>
                <h4 className="final-title">自定义字数提示规则</h4>
                <div>
                    <RUI.Textarea maxLength={140} maxLengthHandler={this.customMaxLength} placeholder="一个汉字算两个字符" />
                </div>
                <h4 className="final-title">根据内容自动缩放</h4>
                <div>
                    <RUI.Textarea resize={'both'} autoSize={true} value="// JUST TODO" />
                </div>
        	</div>
        </div>
    }
});
export {Input};
