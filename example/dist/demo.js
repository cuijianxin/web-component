/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _button = __webpack_require__(1);

	var _checkbox = __webpack_require__(2);

	var _datepicker = __webpack_require__(3);

	var _dialog = __webpack_require__(4);

	var _input = __webpack_require__(5);

	var _loading = __webpack_require__(6);

	var _pagination = __webpack_require__(7);

	var _radio = __webpack_require__(8);

	var _select = __webpack_require__(9);

	var _spinner = __webpack_require__(10);

	var _table = __webpack_require__(11);

	var _tooltip = __webpack_require__(12);

	//import '../dist/bundle.js';
	var TreeItem = React.createClass({
		displayName: 'TreeItem',

		clickHandler: function clickHandler(event) {
			ReactDOM.render(this.props.reactObj, document.getElementById('content'));
			$(".nav-node").removeClass("nav-checked");
			$(event.target).addClass("nav-checked");
		},
		render: function render() {
			return React.createElement(
				'div',
				{ className: 'nav-node', onClick: this.clickHandler },
				this.props.name
			);;
		}
	});
	var Tree = React.createClass({
		displayName: 'Tree',

		getData: function getData() {
			return [{ name: "按钮", reactObj: React.createElement(_button.Button, null) }, { name: "输入框", reactObj: React.createElement(_input.Input, null) }, { name: "数字调节器", reactObj: React.createElement(_spinner.Spinner, null) }, { name: "下拉选框", reactObj: React.createElement(_select.Select, null) }, { name: "分页", reactObj: React.createElement(_pagination.Pagination, null) }, { name: "弹出层", reactObj: React.createElement(_dialog.Dialog, null) }, { name: "提示", reactObj: React.createElement(_tooltip.Tooltip, null) }, { name: "多选", reactObj: React.createElement(_checkbox.CheckBox, null) }, { name: "单选", reactObj: React.createElement(_radio.Radio, null) }, { name: "表格", reactObj: React.createElement(_table.Table, null) }, { name: "日历", reactObj: React.createElement(_datepicker.Datepicker, null) }, { name: "加载", reactObj: React.createElement(_loading.Loading, null) }];
		},
		componentDidMount: function componentDidMount() {
			$(".nav-node:eq(0)").addClass("nav-checked");
		},
		render: function render() {
			var data = this.getData();
			return React.createElement(
				'div',
				null,
				data.map(function (item) {
					return React.createElement(TreeItem, { key: item.name, name: item.name, reactObj: item.reactObj });
				})
			);
		}
	});
	ReactDOM.render(React.createElement(Tree, null), document.getElementById("tree"));
	ReactDOM.render(React.createElement(_checkbox.CheckBox, null), document.getElementById('content'));

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Button = React.createClass({
	    displayName: "Button",

	    getInitialState: function getInitialState() {
	        return {
	            success: false,
	            error: false
	        };
	    },
	    onClickHandler: function onClickHandler(e) {
	        RUI.DialogManager.alert("这是一个按钮点击事件执行的弹出框", "提示");
	    },
	    successClick: function successClick() {
	        this.setState({
	            success: true
	        });
	    },
	    errorClick: function errorClick() {
	        this.setState({
	            error: true
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-button" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u6309\u94AE",
	                React.createElement(
	                    "span",
	                    null,
	                    "Button"
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
	                    "\u4E3B\u9898"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.Button,
	                        { className: "primary" },
	                        "\u4E00\u7EA7\u6309\u94AE"
	                    ),
	                    React.createElement(
	                        RUI.Button,
	                        null,
	                        "\u6B21\u7EA7\u6309\u94AE"
	                    ),
	                    React.createElement(
	                        RUI.Button,
	                        { className: "green" },
	                        "\u6210\u529F\u6309\u94AE"
	                    ),
	                    React.createElement(
	                        RUI.Button,
	                        { onClick: this.onClickHandler, disable: true },
	                        "\u7981\u7528"
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u56FE\u6807\u6309\u94AE"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.Button,
	                        { className: "primary", icon: "loading" },
	                        "\u52A0\u8F7D\u4E2D\u2026"
	                    ),
	                    React.createElement(
	                        RUI.Button,
	                        {
	                            className: "",
	                            onClick: this.successClick,
	                            icon: this.state.success && 'success',
	                            iconHideDelay: 3000 },
	                        "\u70B9\u51FB\u540E\u6210\u529F"
	                    ),
	                    React.createElement(
	                        RUI.Button,
	                        {
	                            className: "",
	                            onClick: this.errorClick,
	                            icon: this.state.error && 'error',
	                            iconHideDelay: 3000 },
	                        "\u70B9\u51FB\u540E\u5931\u8D25"
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u70B9\u51FB\u4E8B\u4EF6"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.Button,
	                        { onClick: this.onClickHandler },
	                        "\u70B9\u51FB"
	                    )
	                )
	            )
	        );
	    }
	});
	exports.Button = Button;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CheckBox = React.createClass({
	    displayName: "CheckBox",

	    valueChange: function valueChange(e) {
	        RUI.DialogManager.alert(JSON.stringify(e.data));
	    },
	    groupChange: function groupChange(e) {
	        console.log(e.data);
	        RUI.DialogManager.alert(JSON.stringify(e.data));
	        this.setState({
	            a: 1
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-checkbox" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u591A\u9009\u6846",
	                React.createElement(
	                    "span",
	                    null,
	                    "Checkbox"
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
	                    "\u5355\u4E2A\u6309\u94AE"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.Checkbox,
	                        { value: "type_1", defaultSelected: 1, onChange: this.valueChange },
	                        "\u521D\u59CB\u5DF2\u9009"
	                    ),
	                    React.createElement(
	                        RUI.Checkbox,
	                        { value: "type_2" },
	                        "\u521D\u59CB\u672A\u9009"
	                    ),
	                    React.createElement(
	                        RUI.Checkbox,
	                        { value: "type_3", defaultSelected: 0, disable: true },
	                        "\u7981\u7528\u72B6\u6001"
	                    ),
	                    React.createElement(
	                        RUI.Checkbox,
	                        { value: "type_3", defaultSelected: 1, disable: true },
	                        "\u7981\u7528\u72B6\u6001"
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u7EC4"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.CheckboxGroup,
	                        { ref: "checkboxGroup", onChange: this.groupChange },
	                        React.createElement(
	                            RUI.Checkbox,
	                            { value: "type_1", defaultSelected: 1 },
	                            "\u521D\u59CB\u5DF2\u9009"
	                        ),
	                        React.createElement(
	                            RUI.Checkbox,
	                            { value: "type_2", defaultSelected: 0 },
	                            "\u521D\u59CB\u672A\u9009"
	                        ),
	                        React.createElement(
	                            RUI.Checkbox,
	                            { value: "type_3", defaultSelected: 0 },
	                            "\u5206\u7EC4\u6D4B\u8BD5"
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	exports.CheckBox = CheckBox;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var timer = Date.now();
	var Datepicker = React.createClass({
	    displayName: "Datepicker",

	    getInitialState: function getInitialState() {
	        this.changeFormatter = new RUI.DateFormatter("Y/m/d");
	        this.formatter = new RUI.DateFormatter("Y-m-d");
	        return {
	            val: ""
	        };
	    },
	    setChange: function setChange(e) {
	        console.dir(e.data);
	        this.setState({
	            time: e.data
	        });
	    },
	    getSinglePickerValue: function getSinglePickerValue(ref) {
	        var selectTime = new Date(parseInt(JSON.stringify(this.refs[ref].getValue())));
	        var month = selectTime.getMonth() + 1;
	        var day = selectTime.getDate();
	        month = month < 10 ? "0" + month : month;
	        day = day < 10 ? "0" + day : day;
	        RUI.DialogManager.alert(selectTime.getFullYear() + "-" + month + "-" + day);
	    },
	    getSinglePickerValue: function getSinglePickerValue(ref) {
	        var selectTime = new Date(parseInt(JSON.stringify(this.refs[ref].getValue())));
	        var month = selectTime.getMonth() + 1,
	            day = selectTime.getDate(),
	            hour = selectTime.getHours(),
	            minute = selectTime.getMinutes(),
	            second = selectTime.getSeconds();
	        RUI.DialogManager.alert(selectTime.getFullYear() + "-" + this.formatTime(month) + "-" + this.formatTime(day) + " " + this.formatTime(hour) + "-" + this.formatTime(minute) + "-" + this.formatTime(second));
	    },
	    formatTime: function formatTime(time) {
	        return time < 10 ? "0" + time : time;
	    },
	    setRangePickerValue: function setRangePickerValue() {
	        this.refs.rangeDatePicker.setValue({
	            startValue: Date.now() - 86400 * 1000 * 90,
	            endValue: Date.now()
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-datepicker" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u65E5\u5386",
	                React.createElement(
	                    "span",
	                    null,
	                    "Datepicker"
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
	                    "\u5E74\u6708\u65E5"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.DatePicker, { ref: "singleDatePicker" }),
	                    React.createElement(
	                        RUI.Button,
	                        { onClick: this.getSinglePickerValue.bind(this, 'singleDatePicker') },
	                        "\u83B7\u53D6\u9009\u4E2D\u503C"
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u5E74\u6708\u65E5\u65F6\u5206\u79D2"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.DatePicker, { ref: "singleDatetimePicker", onChange: this.setChange, showTime: true }),
	                    React.createElement(
	                        RUI.Button,
	                        { onClick: this.getSinglePickerValue.bind(this, 'singleDatetimePicker') },
	                        "\u83B7\u53D6\u9009\u4E2D\u503C"
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u5D4C\u5957Tooltip"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.DatePicker,
	                        { formatter: this.formatter, range: false },
	                        React.createElement(
	                            RUI.Tooltip,
	                            { align: "top-center", trigger: "click" },
	                            "\u5D4C\u5957\u4F7F\u7528\uFF0Cclick\u89E6\u53D1"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u6539\u53D8\u663E\u793A\u683C\u5F0F"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.DatePicker, { formatter: this.changeFormatter, onChange: this.datePickerChange })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u5F00\u59CB\u7ED3\u675F"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.DatePicker, { startValue: '', endValue: '', formatter: new RUI.DateFormatter("Y-m-d"), range: true, onChange: this.datePickerChange })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u8BBE\u7F6E\u5916\u5C42\u8303\u56F4"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.DatePicker, { ref: "rangeDatePicker", range: true }),
	                    React.createElement(
	                        RUI.Button,
	                        { onClick: this.setRangePickerValue },
	                        "\u4E09\u4E2A\u6708\u5185"
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u7981\u7528"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.DatePicker, { disable: true })
	                )
	            )
	        );
	    }
	});
	exports.Datepicker = Datepicker;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Dialog = React.createClass({
	    displayName: 'Dialog',

	    showDialog: function showDialog() {
	        this.refs.dialog.show();
	    },
	    showAlert: function showAlert() {
	        RUI.DialogManager.alert({
	            title: '弹出提示',
	            message: '自定义标题',
	            submit: function submit() {
	                RUI.DialogManager.alert('点击了确定按钮');
	            },
	            submitText: '知道了'
	        });
	    },
	    showConfirm: function showConfirm() {
	        RUI.DialogManager.confirm('确定要这样做吗？');
	    },
	    showConfirmCustom: function showConfirmCustom() {
	        RUI.DialogManager.confirm({
	            message: '确定要这样做吗？',
	            title: '自定义标题',
	            submit: function submit() {
	                RUI.DialogManager.alert('确定按钮被点击了');
	            },
	            submitText: '就这么干吧'
	        });
	    },

	    dialogCancel: function dialogCancel() {
	        RUI.DialogManager.alert("点击了取消按钮");
	    },
	    dialogSubmit: function dialogSubmit() {
	        RUI.DialogManager.alert("点击了确认按钮");
	    },
	    render: function render() {
	        return React.createElement(
	            'div',
	            { className: 'example-dialog' },
	            React.createElement(
	                'h2',
	                { className: 'title' },
	                '\u5F39\u51FA\u5C42',
	                React.createElement(
	                    'span',
	                    null,
	                    'Dialog'
	                )
	            ),
	            React.createElement(
	                'h3',
	                { className: 'sub-title' },
	                '\u6F14\u793A'
	            ),
	            React.createElement(
	                'div',
	                { className: 'example' },
	                React.createElement(
	                    RUI.Button,
	                    { onClick: this.showDialog },
	                    '\u81EA\u5B9A\u4E49\u5185\u5BB9'
	                ),
	                React.createElement(
	                    RUI.Button,
	                    { onClick: this.showAlert },
	                    '\u9ED8\u8BA4Alert'
	                ),
	                React.createElement(
	                    RUI.Button,
	                    { onClick: this.showConfirm },
	                    '\u9ED8\u8BA4Confirm'
	                ),
	                React.createElement(
	                    RUI.Button,
	                    { onClick: this.showConfirmCustom },
	                    '\u81EA\u5B9A\u4E49Confirm'
	                ),
	                React.createElement(
	                    RUI.Dialog,
	                    { ref: 'dialog', title: '\u6D4B\u8BD5\u6807\u9898', draggable: false, buttons: 'submit,cancel', onCancel: this.dialogCancel, onSubmit: this.dialogSubmit },
	                    React.createElement(
	                        'div',
	                        { style: { width: '240px', wordWrap: 'break-word' } },
	                        React.createElement(
	                            'p',
	                            null,
	                            '\u5728\u8FD9\u91CC\u53EF\u4EE5\u81EA\u5B9A\u4E49\u4EFB\u4F55\u8282\u70B9\u548C\u5185\u5BB9'
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	exports.Dialog = Dialog;

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Input = React.createClass({
	    displayName: "Input",

	    getInitialState: function getInitialState() {
	        return {
	            orgContent: "初始文本内容"
	        };
	    },
	    onInputChange: function onInputChange(e) {
	        RUI.DialogManager.alert("触发change事件，输入值:" + e.target.value, "提示");
	    },
	    onEnterHandler: function onEnterHandler(e) {
	        RUI.DialogManager.alert("回车事件，输入值:" + e.target.value, "提示");
	    },
	    customMaxLength: function customMaxLength(val) {
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
	    render: function render() {
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
	                    React.createElement(RUI.Input, { value: this.state.orgContent, onChange: this.onInputChange }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { mode: "static", value: "不可修改" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { disable: true, value: "置灰" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { className: "medium", placeholder: "\u63D0\u793A\u6587\u672C" }),
	                    React.createElement("br", null),
	                    React.createElement(RUI.Input, { grid: 24, onEnter: this.onEnterHandler })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u6587\u672C\u57DF"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { value: this.state.init, ref: "async" })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u5B57\u6570\u63D0\u793A"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { maxLength: 140 })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u81EA\u5B9A\u4E49\u5B57\u6570\u63D0\u793A\u89C4\u5219"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { maxLength: 140, maxLengthHandler: this.customMaxLength, placeholder: "\u4E00\u4E2A\u6C49\u5B57\u7B97\u4E24\u4E2A\u5B57\u7B26" })
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u6839\u636E\u5185\u5BB9\u81EA\u52A8\u7F29\u653E"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Textarea, { resize: 'both', autoSize: true, value: "// JUST TODO" })
	                )
	            )
	        );
	    }
	});
	exports.Input = Input;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Loading = React.createClass({
	    displayName: "Loading",

	    followShowLoading: function followShowLoading(e) {
	        this.refs.followLoading.open(e.data);
	        setTimeout(function () {
	            this.refs.followLoading.close(e.data);
	        }.bind(this), 2000);
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-loading" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u52A0\u8F7D",
	                React.createElement(
	                    "span",
	                    null,
	                    "Loading"
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
	                    RUI.Button,
	                    { className: "primary", onClick: this.followShowLoading },
	                    "loading\u5C55\u793A\uFF0C2\u79D2\u6D88\u5931"
	                )
	            ),
	            React.createElement(RUI.Loading, {
	                ref: "followLoading",
	                type: 'follow',
	                mask: true,
	                size: 's-small' })
	        );
	    }
	});
	exports.Loading = Loading;

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var Pagination = React.createClass({
	    displayName: "Pagination",

	    getInitialState: function getInitialState() {
	        return {
	            pageSize: 10,
	            currentPage: 1,
	            totalNum: 28
	        };
	    },
	    onPageChange: function onPageChange(currentPage) {
	        RUI.DialogManager.alert("当前所在页: 第" + currentPage + "页", "提示");
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-pagination" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u5206\u9875",
	                React.createElement(
	                    "span",
	                    null,
	                    "Pagination"
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
	                React.createElement(RUI.Pagination, _extends({}, this.state, { onPage: this.onPageChange }))
	            )
	        );
	    }
	});
	exports.Pagination = Pagination;

/***/ },
/* 8 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Radio = React.createClass({
	    displayName: "Radio",

	    getInitialState: function getInitialState() {
	        return {
	            asyncMode: 0
	        };
	    },
	    onClickHandler: function onClickHandler() {
	        this.setState({ asyncMode: this.state.asyncMode == 0 ? 1 : 0 });
	    },
	    componentDidMount: function componentDidMount() {
	        var _this = this;
	        setTimeout(function () {
	            _this.setState({
	                asyncMode: 1
	            });
	        }, 300);
	    },
	    valueChange: function valueChange(e) {
	        RUI.DialogManager.alert(JSON.stringify(e.data));
	    },
	    groupChange: function groupChange(e) {
	        RUI.DialogManager.alert(JSON.stringify(e.data));
	        this.setState({
	            a: 1
	        });
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-radio" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u5355\u9009\u6846",
	                React.createElement(
	                    "span",
	                    null,
	                    "Radio"
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
	                    "\u5355\u4E2A\u6309\u94AE"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_1", defaultSelected: 1, onChange: this.valueChange },
	                            "\u521D\u59CB\u5DF2\u9009"
	                        ),
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_2", defaultSelected: 0, onChange: this.valueChange },
	                            "\u521D\u59CB\u672A\u9009"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_3", selected: this.state.asyncMode },
	                            "\u5F02\u6B65\u53D8\u66F4"
	                        ),
	                        React.createElement(
	                            RUI.Button,
	                            { onClick: this.onClickHandler },
	                            "state\u4FEE\u6539\u72B6\u6001"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_4", defaultSelected: 0, disable: true },
	                            "\u7981\u7528\u72B6\u6001"
	                        ),
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_5", defaultSelected: 1, disable: true },
	                            "\u7981\u7528\u72B6\u6001"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u7EC4"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        RUI.RadioGroup,
	                        { ref: "radioGroup", onChange: this.groupChange, defaultValue: "type_1" },
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_1" },
	                            "\u521D\u59CB\u5DF2\u9009"
	                        ),
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_2" },
	                            "\u521D\u59CB\u672A\u9009"
	                        ),
	                        React.createElement(
	                            RUI.Radio,
	                            { value: "type_3" },
	                            "\u5206\u7EC4\u6D4B\u8BD5"
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	exports.Radio = Radio;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var Select = React.createClass({
	    displayName: 'Select',

	    getInitialState: function getInitialState() {
	        return {
	            selected: { key: '初始值', value: '1' },
	            data: [{ key: '初始值', value: '1' }]
	        };
	    },
	    filterHandle: function filterHandle() {
	        return [];
	    },
	    onClickHandler: function onClickHandler(e) {
	        if (this.state.selected.key == "初始值") {
	            RUI.DialogManager.alert("下拉框重新渲染，加载多项数据", "提示");
	            this.setState({
	                selected: { key: '查看3', value: '3' },
	                data: [{ key: '选项1', value: '1' }, { key: '选项2', value: '2' }, { key: '选项3', value: '3' }, { key: '选项4', value: '4' }, { key: '选项5', value: '5' }, { key: '选项6', value: '6' }]
	            });
	        } else {
	            RUI.DialogManager.alert("下拉框重新渲染为初始状态", "提示");
	            this.setState({
	                selected: { key: '初始值', value: '1' },
	                data: [{ key: '初始值', value: '1' }]
	            });
	        }
	    },
	    selectCallback: function selectCallback(selected) {
	        RUI.DialogManager.alert("选择项:" + selected.key, "提示");
	    },
	    render: function render() {
	        var selectList = [{ key: '苹果', value: '1' }, { key: '香蕉', value: '2' }, { key: '菠萝', value: '3' }];
	        return React.createElement(
	            'div',
	            { className: 'example-select' },
	            React.createElement(
	                'h2',
	                { className: 'title' },
	                '\u4E0B\u62C9\u9009\u6846',
	                React.createElement(
	                    'span',
	                    null,
	                    'Select'
	                )
	            ),
	            React.createElement(
	                'h3',
	                { className: 'sub-title' },
	                '\u6F14\u793A'
	            ),
	            React.createElement(
	                'div',
	                { className: 'example' },
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u57FA\u672C\u6837\u5F0F'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(RUI.Select, {
	                        data: selectList,
	                        value: selectList[0],
	                        stuff: true,
	                        callback: this.selectCallback,
	                        className: 'rui-theme-1' })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u65E0\u5916\u8FB9\u6846\u6837\u5F0F'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(RUI.Select, {
	                        ref: 'selectBody',
	                        data: selectList,
	                        value: selectList[0],
	                        className: 'rui-theme-3',
	                        stuff: true,
	                        callback: this.selectCallback })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u5E26\u641C\u7D22\u6846'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(RUI.Select, {
	                        data: selectList,
	                        value: selectList[0],
	                        filter: true,
	                        maxLen: '11',
	                        result: '\u672A\u641C\u7D22\u5230\u5185\u5BB9',
	                        className: 'rui-theme-3',
	                        stuff: true,
	                        filterCallback: this.filterHandle })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u5355\u4E2A\u9009\u62E9\u503C'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(RUI.Select, {
	                        data: this.state.data,
	                        value: this.state.selected,
	                        stuff: true,
	                        offset: '0',
	                        className: 'rui-theme-2 short' }),
	                    '\xA0\xA0',
	                    React.createElement(
	                        RUI.Button,
	                        { onClick: this.onClickHandler },
	                        '\u70B9\u51FB'
	                    )
	                )
	            )
	        );
	    }
	});
	exports.Select = Select;

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var Spinner = React.createClass({
	    displayName: "Spinner",

	    getInitialState: function getInitialState() {
	        return {
	            max: 100,
	            min: 0 + "",
	            step: 5,
	            disable: false,
	            keyboardEnable: true,
	            eventType: 'blur'
	        };
	    },
	    run: function run() {
	        var state = {
	            max: this.refs.max.getValue(),
	            min: this.refs.min.getValue(),
	            step: this.refs.step.getValue(),
	            disable: this.refs.disable.isSelected(),
	            keyboardEnable: this.refs.keyboard.isSelected()
	        };
	        this.setState(state);
	    },
	    render: function render() {
	        return React.createElement(
	            "div",
	            { className: "example-spinner" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u6570\u5B57\u9009\u62E9\u5668",
	                React.createElement(
	                    "span",
	                    null,
	                    "Spinner"
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
	                    "\u914D\u7F6E"
	                ),
	                React.createElement(
	                    "div",
	                    { className: "spinner-config" },
	                    React.createElement(
	                        "div",
	                        { className: "mb10" },
	                        React.createElement(
	                            "label",
	                            null,
	                            "\u6700\u5927\u503C"
	                        ),
	                        React.createElement(RUI.Input, { ref: "max", value: this.state.max })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "mb10" },
	                        React.createElement(
	                            "label",
	                            null,
	                            "\u6700\u5C0F\u503C"
	                        ),
	                        React.createElement(RUI.Input, { ref: "min", value: this.state.min })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "mb10" },
	                        React.createElement(
	                            "label",
	                            null,
	                            "\u9012\u8FDB"
	                        ),
	                        React.createElement(RUI.Input, { ref: "step", value: this.state.step })
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "mb10" },
	                        React.createElement(
	                            RUI.Checkbox,
	                            { ref: "keyboard", selected: this.state.keyboardEnable },
	                            "\u952E\u76D8\u4E0A\u4E0B\u952E"
	                        ),
	                        React.createElement(
	                            RUI.Checkbox,
	                            { ref: "disable", selected: this.state.disable },
	                            "\u7981\u7528"
	                        )
	                    ),
	                    React.createElement(
	                        "div",
	                        { className: "mb10" },
	                        React.createElement(
	                            RUI.Button,
	                            { className: "primary", onClick: this.run },
	                            "\u91CD\u65B0\u6E32\u67D3\u6570\u5B57\u9009\u62E9\u5668"
	                        )
	                    )
	                ),
	                React.createElement(
	                    "h4",
	                    { className: "final-title" },
	                    "\u8FD0\u884C\u6548\u679C"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(RUI.Spinner, this.state)
	                ),
	                React.createElement(
	                    "div",
	                    { style: { marginTop: '20px' } },
	                    React.createElement(RUI.Spinner, _extends({ type: "slider" }, this.state))
	                )
	            )
	        );
	    }
	});
	exports.Spinner = Spinner;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var CheckboxItemRender = React.createClass({
	    displayName: 'CheckboxItemRender',

	    getInitialState: function getInitialState() {
	        return {
	            selected: this.props.selected || 0
	        };
	    },
	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (typeof nextProps.selected != 'undefined') {
	            this.setState({
	                selected: nextProps.selected
	            });
	        }
	        if (typeof nextProps.data != 'undefined') {
	            this.setState(nextProps.data);
	        }
	    },
	    changeHandler: function changeHandler() {
	        this.props.onClick && this.props.onClick(this.state);
	    },
	    render: function render() {
	        return React.createElement(RUI.Checkbox, { selected: this.state.selected, onChange: this.changeHandler });
	    }
	});

	var OperationItemRender = React.createClass({
	    displayName: 'OperationItemRender',

	    clickHandler: function clickHandler() {
	        this.props.onClick && this.props.onClick(this.props.data);
	    },
	    render: function render() {
	        return React.createElement(
	            RUI.Button,
	            { onClick: this.clickHandler },
	            this.props.children
	        );
	    }
	});

	var SortTitleRender = React.createClass({
	    displayName: 'SortTitleRender',

	    setData: function setData(data) {
	        this.setState(data);
	    },
	    render: function render() {
	        return React.createElement(
	            'a',
	            this.props,
	            '\u6392\u5E8F'
	        );
	    }
	});
	var Table = React.createClass({
	    displayName: 'Table',

	    getInitialState: function getInitialState() {
	        return {
	            ajaxData: [{
	                id: 1, name: "该表格的初始数据", phone: "13312341234", prov: "江苏", role: "扫地僧", desc: '影视 娱乐'
	            }],
	            fullData: [{ id: 1, name: "张三", phone: "13312341234", prov: "江苏", role: "扫地僧", desc: { tag: '影视 娱乐' } }, { id: 2, name: "李四", phone: "18912341234", prov: "山东", role: "酱油党", desc: { tag: 'IT 编程' } }, { id: 3, name: "王五", phone: "13512341234", prov: "浙江", role: "吃瓜群众", desc: { tag: '数码 科技' } }, { id: 4, name: "张三", phone: "13312341234", prov: "江苏", role: "扫地僧", desc: { tag: '影视 娱乐' } }, { id: 5, name: "李四", phone: "18912341234", prov: "山东", role: "酱油党", desc: { tag: 'IT 编程' } }, { id: 6, name: "王五", phone: "13512341234", prov: "浙江", role: "吃瓜群众", desc: { tag: '数码 科技' } }, { id: 7, name: "张三", phone: "13312341234", prov: "江苏", role: "扫地僧", desc: { tag: '影视 娱乐' } }, { id: 8, name: "李四", phone: "18912341234", prov: "山东", role: "酱油党", desc: { tag: 'IT 编程' } }, { id: 9, name: "王五", phone: "13512341234", prov: "浙江", role: "吃瓜群众", desc: { tag: '数码 科技' } }, { id: 10, name: "张三", phone: "13312341234", prov: "江苏", role: "扫地僧", desc: { tag: '影视 娱乐' } }, { id: 11, name: "李四", phone: "18912341234", prov: "山东", role: "酱油党", desc: { tag: 'IT 编程' } }, { id: 12, name: "王五", phone: "13512341234", prov: "浙江", role: "吃瓜群众", desc: { tag: '数码 科技' } }],
	            data: this.getData().map(function (item) {
	                item.selected = true;
	                return item;
	            })
	        };
	    },
	    componentDidMount: function componentDidMount() {
	        // 假设有一个ajax请求
	        setTimeout(function () {
	            var list = this.state.ajaxData;
	            list.push({
	                id: 5, name: "拿到的新数据", phone: "13312341234", prov: "江苏", role: "扫地僧", desc: '添加到初始化数据列表'
	            });
	            this.setState({
	                ajaxData: list
	            });
	        }.bind(this), 2000);
	    },
	    columnsFilter: function columnsFilter(keys) {
	        var index = keys.findIndex(function (item) {
	            return item == 'selected';
	        });
	        if (index > -1) {
	            keys.splice(index, 1);
	        }
	        return keys;
	    },
	    getData: function getData() {
	        return [{ id: 1, name: "张三", phone: "13599018834", prov: "江苏", role: "扫地僧", desc: '影视 娱乐' }, { id: 3, name: "李四", phone: "13412341234", prov: "山东", role: "酱油党", desc: 'IT 编程' }, { id: 2, name: "王五", phone: "18999878899", prov: "浙江", role: "吃瓜群众", desc: '数码 科技' }];
	    },
	    sortData: function sortData() {
	        var array = Array.prototype.slice.call(this.state.data);
	        array.sort(function (a, b) {
	            return a.id - b.id;
	        });
	        this.setState({
	            data: array
	        });
	    },
	    tableDelete: function tableDelete(data) {
	        var list = [];
	        this.state.data.map(function (item) {
	            if (item.id != data.id) {
	                list.push(item);
	            }
	        });
	        this.setState({
	            data: list
	        });
	        RUI.DialogManager.alert(JSON.stringify(data));
	    },
	    fieldFormat: function fieldFormat(data, source) {
	        return (data + "").replace(/(\d{3})(\d{4})(\d{4})/g, function (match, a1, a2, a3) {
	            return a1 + '-' + a2 + '-' + a3;
	        });
	    },
	    allCheck: function allCheck() {
	        var isAllCheck = this.isAllCheck();
	        this.setState({
	            data: this.state.data.map(function (item) {
	                item.selected = isAllCheck ? false : true;
	                return item;
	            })
	        });
	    },
	    isAllCheck: function isAllCheck() {
	        return !this.state.data.some(function (item) {
	            return !item.selected;
	        });
	    },
	    checkItem: function checkItem(data) {
	        this.setState({
	            data: this.state.data.map(function (item) {
	                if (item.id == data.id) {
	                    item.selected = !item.selected;
	                }
	                return item;
	            })
	        });
	    },
	    render: function render() {
	        var sourceData = this.state.data;

	        return React.createElement(
	            'div',
	            { className: 'example-table' },
	            React.createElement(
	                'h2',
	                { className: 'title' },
	                '\u8868\u683C',
	                React.createElement(
	                    'span',
	                    null,
	                    'Table'
	                )
	            ),
	            React.createElement(
	                'h3',
	                { className: 'sub-title' },
	                '\u6F14\u793A'
	            ),
	            React.createElement(
	                'div',
	                { className: 'example' },
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u9ED8\u8BA4\u8868\u683C'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(RUI.Table, { dataSource: this.getData() })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u52A8\u6001\u6E32\u67D3\uFF08\u5F02\u6B65\u62FF\u65B0\u6570\u636E\uFF0C\u91CD\u65B0\u6E32\u67D3\uFF09'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(RUI.Table, { dataSource: this.state.ajaxData, columnsFilter: this.columnsFilter })
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u81EA\u5B9A\u4E49\u6807\u9898\u683C'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        RUI.Table,
	                        { dataSource: this.getData().slice(0) },
	                        React.createElement(
	                            RUI.Column,
	                            { dataField: "id", width: 80, className: 'column-item-1', titleClassName: 'column-title-1' },
	                            React.createElement(
	                                RUI.Table.TitleRender,
	                                { className: 'render-title-2' },
	                                React.createElement(SortTitleRender, { onClick: this.sortData })
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Column,
	                            { title: "头像" },
	                            React.createElement(
	                                RUI.Table.ItemRender,
	                                { className: 'render-item-2' },
	                                React.createElement('img', { src: 'http://img2.imgtn.bdimg.com/it/u=2260333448,2183764270&fm=23&gp=0.jpg', style: { height: 80 } })
	                            )
	                        ),
	                        React.createElement(RUI.Column, { title: "用户名", dataField: "name" }),
	                        React.createElement(RUI.Column, { title: "手机号", dataField: "phone", fieldFunction: this.fieldFormat }),
	                        React.createElement(RUI.Column, { title: "描述标签", dataField: "desc" }),
	                        React.createElement(RUI.Column, { title: "角色", dataField: "role" })
	                    )
	                ),
	                React.createElement(
	                    'h4',
	                    { className: 'final-title' },
	                    '\u81EA\u5B9A\u4E49\u5355\u5143\u683C'
	                ),
	                React.createElement(
	                    'div',
	                    null,
	                    React.createElement(
	                        RUI.Table,
	                        { dataSource: sourceData },
	                        React.createElement(
	                            RUI.Column,
	                            { width: 75 },
	                            React.createElement(
	                                RUI.Table.TitleRender,
	                                null,
	                                React.createElement(CheckboxItemRender, { onClick: this.allCheck, selected: this.isAllCheck() })
	                            ),
	                            React.createElement(
	                                RUI.Table.ItemRender,
	                                null,
	                                React.createElement(CheckboxItemRender, { onClick: this.checkItem })
	                            )
	                        ),
	                        React.createElement(RUI.Column, { title: "用户名", dataField: "name" }),
	                        React.createElement(RUI.Column, { title: "手机号", dataField: "phone" }),
	                        React.createElement(RUI.Column, { title: "省份", dataField: "prov", width: 75 }),
	                        React.createElement(RUI.Column, { title: "角色", dataField: "role" }),
	                        React.createElement(
	                            RUI.Column,
	                            { title: "操作" },
	                            React.createElement(
	                                RUI.Table.ItemRender,
	                                null,
	                                React.createElement(
	                                    OperationItemRender,
	                                    { onClick: this.tableDelete },
	                                    '\u5220\u9664'
	                                )
	                            )
	                        )
	                    )
	                )
	            )
	        );
	    }
	});
	exports.Table = Table;

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
					value: true
	});
	var Tooltip = React.createClass({
					displayName: "Tooltip",

					render: function render() {
									return React.createElement(
													"div",
													{ className: "example-tooltip" },
													React.createElement(
																	"h2",
																	{ className: "title" },
																	"\u63D0\u793A",
																	React.createElement(
																					"span",
																					null,
																					"Tooltip"
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
																					"\u57FA\u672C\u6837\u5F0F"
																	),
																	React.createElement(
																					"div",
																					null,
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u4E0A\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "top-center" },
																													"Tooltip"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u4E0B\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "bottom-center" },
																													"Tooltip"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u5DE6\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "middle-left" },
																													"Tooltip"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u53F3\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "middle-right" },
																													"Tooltip"
																									)
																					)
																	),
																	React.createElement(
																					"h4",
																					{ className: "final-title" },
																					"\u4FA7\u65B9\u4F4D\u63D0\u793A"
																	),
																	React.createElement(
																					"div",
																					null,
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u5DE6\u4E0A\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "top-left" },
																													"Tooltip"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u53F3\u4E0A\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "top-right" },
																													"Tooltip"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u5DE6\u4E0B\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "bottom-left" },
																													"Tooltip"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u53F3\u4E0B\u65B9Tooltip"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "bottom-right" },
																													"Tooltip"
																									)
																					)
																	),
																	React.createElement(
																					"h4",
																					{ className: "final-title" },
																					"\u7279\u6B8A\u5C55\u793A"
																	),
																	React.createElement(
																					"div",
																					null,
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u63D0\u793A\u4E0D\u6D88\u5931"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "middle-left", autoHide: false },
																													"\u63D0\u793A\u4E0D\u6D88\u5931"
																									)
																					),
																					React.createElement(
																									RUI.Button,
																									null,
																									React.createElement(
																													"span",
																													null,
																													"\u63D0\u793A\u4FE1\u606F\u7684\u5185\u5BB9\u6837\u5F0F\u53EF\u6DFB\u52A0\u4FEE\u6539"
																									),
																									React.createElement(
																													RUI.Tooltip,
																													{ align: "middle-right" },
																													React.createElement(
																																	"span",
																																	{ style: { color: '#d90000' } },
																																	"this is a html block"
																													)
																									)
																					)
																	)
													)
									);
					}
	});
	exports.Tooltip = Tooltip;

/***/ }
/******/ ]);