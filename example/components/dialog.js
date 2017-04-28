var Dialog = React.createClass({
	showDialog:function() {
        this.refs.dialog.show();
    },
    showAlert:function() {
        RUI.DialogManager.alert({
            title:'弹出提示',
            message:'自定义标题',
            submit:function() {
                RUI.DialogManager.alert('点击了确定按钮');
            },
            submitText:'知道了'
        });
    },
    showConfirm:function() {
        RUI.DialogManager.confirm('确定要这样做吗？');
    },
    showConfirmCustom:function() {
        RUI.DialogManager.confirm({
            message:'确定要这样做吗？',
            title:'自定义标题',
            submit:function() {
                RUI.DialogManager.alert('确定按钮被点击了');
            },
            submitText:'就这么干吧'
        });
    },
    
    dialogCancel:function() {
        RUI.DialogManager.alert("点击了取消按钮");
    },
    dialogSubmit:function() {
        RUI.DialogManager.alert("点击了确认按钮");
    },
    render:function() {
        return <div className="example-dialog">
        	<h2 className="title">弹出层<span>Dialog</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
            	<RUI.Button onClick={this.showDialog}>自定义内容</RUI.Button>
                <RUI.Button onClick={this.showAlert}>默认Alert</RUI.Button>
                <RUI.Button onClick={this.showConfirm}>默认Confirm</RUI.Button>
                <RUI.Button onClick={this.showConfirmCustom}>自定义Confirm</RUI.Button>
                
                <RUI.Dialog ref="dialog" title="测试标题" draggable={false} buttons="submit,cancel" onCancel={this.dialogCancel} onSubmit={this.dialogSubmit}>
                    <div style={{width:'240px', wordWrap:'break-word'}}>
                        <p>在这里可以自定义任何节点和内容</p>
                    </div>
                </RUI.Dialog>
            </div>
        </div>
    }
});
export {Dialog};