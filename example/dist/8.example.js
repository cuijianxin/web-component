webpackJsonp([8],{44:function(e,a,t){var l=React.createClass({displayName:"Example",getInitialState:function(){return{selected:{key:"查看2222",value:"1"},data:[{key:"查看",value:"1"}]}},filterHandle:function(){return[]},onClickHandler:function(e){this.setState({selected:{key:"查看6",value:"3"},data:[{key:"查看1",value:"1"},{key:"查看2",value:"2"},{key:"查看3",value:"3"},{key:"查看4",value:"3"},{key:"查看5",value:"3"},{key:"查看6",value:"3"}]})},render:function(){return React.createElement("div",{className:"example-input"},React.createElement("h2",{className:"title"},"下拉选框",React.createElement("span",null,"Select")),React.createElement("h3",{className:"sub-title"},"演示"),React.createElement("div",{className:"example"},React.createElement("h4",{className:"final-title"},"默认"),React.createElement("div",null,React.createElement(RUI.Select,{data:[{key:"查看",value:"1"},{key:"编辑",value:"2"},{key:"删除",value:"3"}],value:{key:"查看",value:"1"},stuff:!0,className:"rui-theme-1"})),React.createElement("h4",{className:"final-title"},"另外一种样式"),React.createElement("div",null,React.createElement(RUI.Select,{ref:"selectBody",data:[{key:"查看",value:"1"},{key:"你好",value:"2"}],value:{key:"查看",value:"1"},className:"rui-theme-3",stuff:!0,callback:this.selectCallback})),React.createElement("h4",{className:"final-title"},"带搜索框"),React.createElement("div",null,React.createElement(RUI.Select,{data:[{key:"查看",value:"1"},{key:"a",value:"1"},{key:"aa",value:"1"},{key:"b",value:"1"},{key:"bba",value:"1"}],value:{key:"查看",value:"1"},filter:!0,maxLen:"11",result:"暂无相关信息",className:"rui-theme-3",stuff:!0,filterCallback:this.filterHandle})),React.createElement("h4",{className:"final-title"},"选项只有一个"),React.createElement("div",null,React.createElement(RUI.Select,{data:this.state.data,value:this.state.selected,stuff:!0,offset:"0",callback:this.selectCallback,className:"rui-theme-2 short"}),"  ",React.createElement(RUI.Button,{onClick:this.onClickHandler},"点击"))),React.createElement("h3",{className:"sub-title"},"源码"),React.createElement("div",{className:"source"},React.createElement("textarea",{defaultValue:t(98)})))}});e.exports=l},98:function(e,a){e.exports="var Example = React.createClass({\n    getInitialState: function () {\n        return {\n            selected :{key:'查看2222',value:'1'},\n            data: [{key:'查看',value:'1'}]\n        };\n    },\n    filterHandle : function() {\n        return [];\n    },\n    onClickHandler:function(e) {\n        this.setState({\n            selected : {key:'查看6',value:'3'},\n            data : [\n                {key:'查看1',value:'1'},\n                {key:'查看2',value:'2'},\n                {key:'查看3',value:'3'},\n                {key:'查看4',value:'3'},\n                {key:'查看5',value:'3'},\n                {key:'查看6',value:'3'}\n            ]\n        });\n    },\n    render:function() {\n        return <div className=\"example-input\">\n            <h2 className=\"title\">下拉选框<span>Select</span></h2>\n            <h3 className=\"sub-title\">演示</h3>\n            <div className=\"example\">\n                <h4 className=\"final-title\">默认</h4>\n                <div>\n                    <RUI.Select\n                        data={[{key:'查看',value:'1'}, {key:'编辑',value:'2'}, {key:'删除',value:'3'}]}\n                        value={{key:'查看',value:'1'}}\n                        stuff={true}\n                        className=\"rui-theme-1\">\n                    </RUI.Select>\n                </div>\n                <h4 className=\"final-title\">另外一种样式</h4>\n                <div>\n                    <RUI.Select\n                        ref=\"selectBody\"\n                        data={[{key:'查看',value:'1'},{key:'你好',value:'2'}]}\n                        value={{key:'查看',value:'1'}}\n                        className=\"rui-theme-3\"\n                        stuff={true}\n                        callback={this.selectCallback}>\n                    </RUI.Select>\n                </div>\n                <h4 className=\"final-title\">带搜索框</h4>\n                <div>\n                    <RUI.Select\n                        data={[{key:'查看',value:'1'}, {key:'a',value:'1'}, {key:'aa',value:'1'}, {key:'b',value:'1'}, {key:'bba',value:'1'}]}\n                        value={{key:'查看',value:'1'}}\n                        filter={true}\n                        maxLen=\"11\"\n                        result=\"暂无相关信息\"\n                        className=\"rui-theme-3\"\n                        stuff={true}\n                        filterCallback={this.filterHandle}>\n                    </RUI.Select>\n                </div>\n\n                <h4 className=\"final-title\">选项只有一个</h4>\n                <div>\n                    <RUI.Select\n                        data={this.state.data}\n                        value={this.state.selected}\n                        stuff={true}\n                        offset={'0'}\n                        callback={this.selectCallback}\n                        className=\"rui-theme-2 short\">\n                    </RUI.Select>\n                    &nbsp;&nbsp;\n                    <RUI.Button onClick={this.onClickHandler}>点击</RUI.Button>\n                </div>\n            </div>\n            <h3 className=\"sub-title\">源码</h3>\n            <div className=\"source\">\n                <textarea defaultValue={require('raw!./select.js')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;"}});