var Tooltip = React.createClass({
    render:function() {
        return <div className="example-tooltip">
        	<h2 className="title">提示<span>Tooltip</span></h2>
        	<h3 className="sub-title">演示</h3>
            <div className="example">
            	<h4 className="final-title">基本样式</h4>
                <div>
                	<RUI.Button>
	                    <span>上方Tooltip</span>
	                    <RUI.Tooltip align="top-center">Tooltip</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
	                    <span>下方Tooltip</span>
	                    <RUI.Tooltip align="bottom-center">Tooltip</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
	                    <span>左方Tooltip</span>
	                    <RUI.Tooltip align="middle-left">Tooltip</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
	                    <span>右方Tooltip</span>
	                    <RUI.Tooltip align="middle-right">Tooltip</RUI.Tooltip>
	                </RUI.Button>
                </div>
                <h4 className="final-title">侧方位提示</h4>
                <div>
                	<RUI.Button>
	                    <span>左上方Tooltip</span>
	                    <RUI.Tooltip align="top-left">Tooltip</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
	                    <span>右上方Tooltip</span>
	                    <RUI.Tooltip align="top-right">Tooltip</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
	                    <span>左下方Tooltip</span>
	                    <RUI.Tooltip align="bottom-left">Tooltip</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
                    <span>右下方Tooltip</span>
                    <RUI.Tooltip align="bottom-right">Tooltip</RUI.Tooltip></RUI.Button>
                </div>
                <h4 className="final-title">特殊展示</h4>
                <div>
                	<RUI.Button>
	                    <span>提示不消失</span>
	                    <RUI.Tooltip align="middle-left"  autoHide={false}>提示不消失</RUI.Tooltip>
	                </RUI.Button>
	                <RUI.Button>
	                    <span>提示信息的内容样式可添加修改</span>
	                    <RUI.Tooltip align="middle-right"><span style={{color:'#d90000'}}>this is a html block</span></RUI.Tooltip>
	                </RUI.Button>
                </div>
            </div>
        </div>
    }
});
export {Tooltip};