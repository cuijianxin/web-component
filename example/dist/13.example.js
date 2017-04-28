webpackJsonp([13],{

/***/ 39:
/***/ function(module, exports, __webpack_require__) {

	var Example = React.createClass({
	    displayName: "Example",
	
	    getInitialState: function () {
	        return {
	            init: "在这儿显示初始字符"
	        };
	    },
	    componentDidMount: function () {
	        setTimeout(() => {
	            this.refs.async.setValue("0123456789");
	        }, 10);
	    },
	    onInputChange: function (e) {
	        RUI.DialogManager.alert("change:" + e.target.value, "提示");
	    },
	    onEnterHandler: function (e) {
	        RUI.DialogManager.alert('enter');
	    },
	    customMaxLength: function (val) {
	        if (!val) {
	            return 140;
	        }
	        var len = 0;
	        for (var i = 0; i < val.length; i++) {
	            var a = val.charAt(i);
	            if (a.match(/[^\x00-\xff]/ig) != null) {
	                len += 2;
	            } else {
	                len += 1;
	            }
	        }
	        return Math.max(0, 140 - len);
	    },
	    render: function () {
	        var AddonInputSearchSelect = React.createElement(RUI.Select, {
	            autoWidth: true,
	            data: [{ key: '请选择', value: '0' }, { key: '订单号', value: '1' }, { key: '商品编号', value: '2' }]
	        });
	        var AddonInputEmailSelect = React.createElement(RUI.Select, {
	            autoWidth: true,
	            data: [{ key: '@gmail.com', value: '1' }, { key: '@163.com', value: '2' }, { key: '@sina.com.cn', value: '3' }]
	        });
	        return React.createElement(
	            "div",
	            { className: "example-input" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u8F93\u5165\u6846",
	                React.createElement(
	                    "span",
	                    null,
	                    "Input"
	                )
	            ),
	            React.createElement(
	                "h3",
	                { className: "sub-title" },
	                "\u6F14\u793A"
	            ),
	            React.createElement(
	                "div",
	                { className: "example" },
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u8F93\u5165\u6846"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Input, { value: this.state.init, disable: true, onChange: this.onInputChange }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { mode: "static", value: "不可修改" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { className: "medium", placeholder: "\u4FDD\u7559\u6B63\u5E38\u7ED3\u70B9\u5C5E\u6027" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { grid: 24, onEnter: this.onEnterHandler })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u524D\u540E\u7F00"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.AddonInput, { before: "http://", after: ".com" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.AddonInput, { after: ".html" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.AddonInput, { before: "\u7528\u6237\u540D\uFF1A" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.AddonInput, { before: AddonInputSearchSelect }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.AddonInput, { after: AddonInputEmailSelect })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u6587\u672C\u57DF"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { value: this.state.init, resize: 'both', ref: "async" })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u5B57\u6570\u63D0\u793A"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { maxLength: 140, resize: 'vertical' })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u81EA\u5B9A\u4E49\u5B57\u6570\u63D0\u793A\u89C4\u5219"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { disable: true, maxLength: 140, maxLengthHandler: this.customMaxLength, placeholder: "\u4E00\u4E2A\u6C49\u5B57\u7B97\u4E24\u4E2A\u5B57\u7B26" })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u7F29\u653E"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { resize: 'horizontal', autoSize: true, value: "// JUST TODO" })
	                )
	            ),
	            React.createElement(
	                "h3",
	                { className: "sub-title" },
	                "\u6E90\u7801"
	            ),
	            React.createElement(
	                "div",
	                { className: "source" },
	                React.createElement("textarea", { defaultValue: __webpack_require__(93) })
	            )
	        );
	    }
	});
	
	module.exports = Example;

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = "var Example = React.createClass({\n    getInitialState:function() {\n        return {\n            init:\"在这儿显示初始字符\"\n        }\n    },\n    componentDidMount:function() {\n        setTimeout(()=>{\n            this.refs.async.setValue(\"0123456789\");\n        }, 10);\n    },\n    onInputChange:function(e) {\n        RUI.DialogManager.alert(\"change:\" + e.target.value, \"提示\");\n    },\n    onEnterHandler:function(e) {\n        RUI.DialogManager.alert('enter') ;\n    },\n    customMaxLength:function(val) {\n        if(!val) {\n            return 140;\n        }\n        var len = 0;\n        for (var i = 0; i < val.length; i++) {\n            var a = val.charAt(i);\n            if (a.match(/[^\\x00-\\xff]/ig) != null)\n            {\n                len += 2;\n            }\n            else\n            {\n                len += 1;\n            }\n        }\n        return Math.max(0, 140 - len);\n    },\n    render:function() {\n        var AddonInputSearchSelect = <RUI.Select\n            autoWidth={true}\n            data={[{key:'请选择',value:'0'},{key:'订单号',value:'1'},{key:'商品编号',value:'2'}]}\n        />;\n        var AddonInputEmailSelect = <RUI.Select\n            autoWidth={true}\n            data={[{key:'@gmail.com',value:'1'},{key:'@163.com',value:'2'},{key:'@sina.com.cn',value:'3'}]}\n        />;\n        return <div className=\"example-input\">\n            <h2 className=\"title\">输入框<span>Input</span></h2>\n            <h3 className=\"sub-title\">演示</h3>\n            <div className=\"example\">\n                <h4 className=\"final-title\">输入框</h4>\n                <div>\n                    <RUI.Input value={this.state.init} disable={true} onChange={this.onInputChange} /><br/>\n                    <RUI.Input mode=\"static\" value={\"不可修改\"}/><br/>\n                    <RUI.Input className=\"medium\" placeholder=\"保留正常结点属性\"/><br/>\n                    <RUI.Input grid={24} onEnter={this.onEnterHandler} />\n                </div>\n                <h4 className=\"final-title\">前后缀</h4>\n                <div>\n                    <RUI.AddonInput before=\"http://\" after=\".com\" /><br/>\n                    <RUI.AddonInput after=\".html\" /><br/>\n                    <RUI.AddonInput before=\"用户名：\" /><br/>\n                    <RUI.AddonInput before={AddonInputSearchSelect} /><br/>\n                    <RUI.AddonInput after={AddonInputEmailSelect} />\n                </div>\n                <h4 className=\"final-title\">文本域</h4>\n                <div>\n                    <RUI.Textarea value={this.state.init} resize={'both'} ref=\"async\" />\n                </div>\n                <h4 className=\"final-title\">字数提示</h4>\n                <div>\n                    <RUI.Textarea maxLength={140} resize={'vertical'} />\n                </div>\n                <h4 className=\"final-title\">自定义字数提示规则</h4>\n                <div>\n                    <RUI.Textarea disable={true} maxLength={140} maxLengthHandler={this.customMaxLength} placeholder=\"一个汉字算两个字符\" />\n                </div>\n                <h4 className=\"final-title\">根据内容自动缩放</h4>\n                <div>\n                    <RUI.Textarea resize={'horizontal'} autoSize={true} value=\"// JUST TODO\" />\n                </div>\n            </div>\n            <h3 className=\"sub-title\">源码</h3>\n            <div className=\"source\">\n                <textarea defaultValue={require('raw!./input.js')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;\n"

/***/ }

});