webpackJsonp([14],{

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	var CustomControl = React.createClass({
	    displayName: "CustomControl",
	
	    render: function () {
	        return React.createElement(
	            "div",
	            null,
	            React.createElement(
	                "p",
	                null,
	                "\u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684Control"
	            ),
	            React.createElement(RUI.Input, { ref: "input" })
	        );
	    }
	});
	
	var timer = Date.now();
	var Example = React.createClass({
	    displayName: "Example",
	
	    formatUploadData: function (file) {
	        var data = (file || "").split(',');
	        var suffix = data[0].match(/data:image\/(.+);base64/);
	        return {
	            suffix: suffix[1],
	            baseStr: data[1]
	        };
	    },
	    checkImgSizeAndType: function (file, limit) {
	        if (!/^(jpg|png|jpeg|bmp)$/gi.test(file.data.type.split('/')[1])) {
	            RUI.DialogManager.alert("上传图片只允许JPEG、JPG、PNG、BMP格式的图片!");
	            return false;
	        }
	        if ((file.data.size / (1024 * 1024)).toFixed(2) > limit) {
	            RUI.DialogManager.alert('上传图片大小只允许' + limit + 'M的图片!');
	            return false;
	        }
	        return true;
	    },
	    uploadCheck: function (e) {
	        return this.checkImgSizeAndType(e, 2);
	    },
	    formRules: function () {
	        var _this = this;
	        return {
	            username: {
	                required: true,
	                validator: {
	                    'user': {
	                        rules: {
	                            required: {
	                                msg: '姓名不能为空'
	                            },
	                            filter: {
	                                reg: 'number', //验证规则
	                                msg: '姓名格式不正确'
	                            },
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc, v) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            activity: {
	                required: true,
	                validator: {
	                    'evt': {
	                        rules: {
	                            required: {
	                                msg: '活动名称不能为空'
	                            },
	                            filter: {
	                                reg: 'name', //验证规则
	                                msg: '活动名称格式不正确'
	                            },
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc) {
	                                //远程校验
	                                /* var form = _this.refs.form;
	                                 $.ajax({
	                                     url:'http://shop.berbon.com/react-component/src/js/containers/form/remotes.json',
	                                     type:'get',
	                                     dataType : 'json',
	                                     data:{},
	                                     cache: false,
	                                     beforeSend : function() {
	                                         form.setFieldCheckStatus('evt',{
	                                             validateStatus : 'is-validating',
	                                             explain : ''
	                                         });
	                                     },
	                                     success:function(response) {
	                                         form.setFieldCheckStatus('evt',{
	                                             validateStatus : 'is-success',
	                                             explain : ''
	                                         });
	                                     },
	                                     error:function() {
	                                         form.setFieldCheckStatus('evt',{
	                                             validateStatus : 'is-error',
	                                             explain : '网络错误,请稍后再试！'
	                                         });
	                                     }
	                                 });*/
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            time: {
	                required: true,
	                validator: {
	                    'start': {
	                        rules: {
	                            required: {
	                                msg: '请选择开始时间'
	                            },
	                            trigger: 'onChange',
	                            callback: function (rc, v) {
	                                return true;
	                            }
	                        }
	                    },
	                    'end': {
	                        rules: {
	                            required: {
	                                msg: '请选择结束时间'
	                            },
	                            trigger: 'onChange',
	                            callback: function (rc, v) {
	                                var form = _this.refs.form;
	                                var start = form.getSingleFieldValue('start');
	                                _this.setState({
	                                    time: v
	                                });
	                                if (start > v) {
	                                    form.setFieldCheckStatus('end', {
	                                        validateStatus: 'is-error',
	                                        explain: '结束时间不能小于开始时间'
	                                    });
	                                    return false;
	                                }
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            people: {
	                required: true,
	                validator: {
	                    'people': {
	                        rules: {
	                            trigger: 'onChange',
	                            callback: function (rc, v) {
	                                var form = _this.refs.form;
	                                if (!v) {
	                                    rc.setState({
	                                        validateStatus: 'is-error',
	                                        explain: '请选择参与人数限制！'
	                                    });
	                                    return false;
	                                } else {
	                                    rc.setState({
	                                        validateStatus: '',
	                                        explain: ''
	                                    });
	                                    return true;
	                                }
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            plimit: {
	                required: false,
	                validator: {
	                    'limit': {
	                        rules: {
	                            trigger: 'onChange',
	                            callback: function (rc) {
	                                var value = rc.getValue();
	                                var form = _this.refs.form;
	                                if (value == '1') {
	                                    _this.setState({
	                                        numberDisable: true,
	                                        number: ''
	                                    });
	                                    _this.refs.form.setFieldCheckStatus('number', {
	                                        validateStatus: '',
	                                        explain: ''
	                                    });
	                                } else {
	                                    _this.setState({
	                                        numberDisable: false
	                                    });
	                                }
	                                return true;
	                            }
	                        }
	                    },
	                    'number': {
	                        rules: {
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc) {
	                                var form = _this.refs.form;
	                                var limit = form.getSingleFieldValue('limit');
	                                if (limit == '0') {
	                                    if (/^[1-9]$/.test(rc.getValue())) {
	                                        form.setFieldCheckStatus('number', {
	                                            validateStatus: 'is-success',
	                                            explain: ''
	                                        });
	                                        return true;
	                                    } else {
	                                        form.setFieldCheckStatus('number', {
	                                            validateStatus: 'is-error',
	                                            explain: '1-9的数'
	                                        });
	                                        return false;
	                                    }
	                                }
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            rewardType: {
	                required: true,
	                validator: {
	                    'reward': {
	                        rules: {
	                            required: {
	                                msg: '请选择派奖方式'
	                            },
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            chance: {
	                required: false,
	                validator: {
	                    'chance': {
	                        rules: {
	                            filter: {
	                                reg: 'number',
	                                msg: '机会只能为数字'
	                            },
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            cover: {
	                required: true,
	                validator: {
	                    'cover': {
	                        rules: {
	                            required: {
	                                msg: '图片不能为空'
	                            },
	                            callback: function (rc) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            desc: {
	                required: true,
	                validator: {
	                    'desc': {
	                        rules: {
	                            required: {
	                                msg: '描述不能为空'
	                            },
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	            },
	            descType: {
	                required: false,
	                validator: {
	                    'descType': {
	                        rules: {
	                            required: {
	                                msg: '请至少选择一个类型'
	                            },
	                            trigger: 'onBlur|onChange',
	                            callback: function (rc) {
	                                return true;
	                            }
	                        }
	                    }
	                }
	            }
	        };
	    },
	    componentDidMount: function () {
	        //执行某项表单元校验
	        this.refs.form.validateSingleField('evt');
	    },
	    getInitialState: function () {
	        return {
	            val: "",
	            rules: this.formRules(),
	            explain: this.props.explain,
	            numberDisable: false,
	            number: '',
	            disable: false,
	            hide: true,
	            list: ['http://10.2.50.38/images/ae13c4d4dcea406c133ebb6d6f31dca6_1477965048481.JPEG_614_614.JPEG']
	        };
	    },
	    changeName: function (e) {
	        this.setState({
	            value: e.target.value
	        });
	    },
	    doNumber: function (e) {
	        this.setState({
	            number: e.target.value
	        });
	    },
	    submitHandler: function (data, form) {
	        //RUI.DialogManager.alert(JSON.stringify(data));
	        console.dir(data);
	        //return false;
	    },
	    complete: function (res, s) {
	        var form = this.refs.form;
	        var uploadList = form.getSingleFieldValue('cover');
	        if (uploadList.length > 0) {
	            form.setFieldCheckStatus('cover', {
	                validateStatus: '',
	                explain: ''
	            });
	        }
	    },
	    render: function () {
	        var selectData = [{ key: '请选择', value: 0 }, { key: '管理员', value: 1 }, { key: '编辑', value: 2 }, { key: '审查', value: 3 }];
	        return React.createElement(
	            "div",
	            { className: "example-form" },
	            React.createElement(
	                "h2",
	                { className: "title" },
	                "\u8868\u5355",
	                React.createElement(
	                    "span",
	                    null,
	                    "Form"
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
	                    "\u9A8C\u8BC1"
	                ),
	                React.createElement(
	                    "div",
	                    null,
	                    React.createElement(
	                        "div",
	                        null,
	                        React.createElement(
	                            RUI.Form,
	                            null,
	                            React.createElement(
	                                RUI.Form.Row,
	                                null,
	                                React.createElement(
	                                    RUI.Form.Control,
	                                    { name: "test" },
	                                    React.createElement(CustomControl, null),
	                                    React.createElement(RUI.Input, null)
	                                )
	                            )
	                        )
	                    ),
	                    React.createElement(RUI.Input, { onChange: e => this.setState({ val: e.target.value }), value: this.state.val }),
	                    React.createElement(
	                        RUI.Form,
	                        { ref: "form", className: "horizonal", onSubmit: this.submitHandler, rules: this.state.rules },
	                        React.createElement(
	                            RUI.Form.Row,
	                            null,
	                            React.createElement(
	                                "p",
	                                { style: { paddingBottom: '5px', fontSize: '16px', fontWeight: 'bold', borderBottom: "1px dashed #dadada" } },
	                                "\u57FA\u672C\u8BBE\u7F6E"
	                            )
	                        ),
	                        this.state.hide && React.createElement(
	                            "div",
	                            { className: "username", type: "username" },
	                            React.createElement(RUI.Form.Control, {
	                                rowType: "username",
	                                name: "user",
	                                type: "input",
	                                onChange: this.changeName,
	                                value: this.state.value,
	                                placeholder: "\u6700\u591A\u8F93\u516515\u4E2A\u5B57"
	                            })
	                        ),
	                        React.createElement(
	                            "div",
	                            null,
	                            React.createElement(
	                                RUI.Form.Row,
	                                { label: "\u6D3B\u52A8\u540D\u79F0\uFF1A", type: "activity" },
	                                React.createElement(RUI.Form.Control, {
	                                    rowType: "activity",
	                                    name: "evt",
	                                    type: "input",
	                                    defaultValue: "sd",
	                                    placeholder: "\u6700\u591A\u8F93\u516515\u4E2A\u5B57"
	                                })
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u6D3B\u52A8\u65F6\u95F4\uFF1A", type: "time" },
	                            React.createElement(
	                                "div",
	                                null,
	                                React.createElement(RUI.Form.Control, {
	                                    rowType: "time",
	                                    name: "start",
	                                    showTime: true,
	                                    type: "datePicker"
	                                }),
	                                React.createElement("span", { className: "split" }),
	                                React.createElement(RUI.Form.Control, {
	                                    rowType: "time",
	                                    name: "end",
	                                    showTime: true,
	                                    value: this.state.time || timer,
	                                    type: "datePicker"
	                                })
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u53C2\u4E0E\u4EBA\u6570\uFF1A", type: "people" },
	                            React.createElement(
	                                RUI.Form.Control,
	                                {
	                                    rowType: "people",
	                                    name: "people",
	                                    type: "radio" },
	                                React.createElement(
	                                    RUI.Radio,
	                                    { value: "1" },
	                                    "\u9690\u85CF"
	                                ),
	                                React.createElement(
	                                    RUI.Radio,
	                                    { value: "0" },
	                                    "\u663E\u793A"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u53C2\u4E0E\u4EBA\u6570\u9650\u5236\uFF1A", type: "plimit" },
	                            React.createElement(
	                                RUI.Form.Control,
	                                {
	                                    rowType: "plimit",
	                                    defaultValue: "1",
	                                    name: "limit",
	                                    type: "radio" },
	                                React.createElement(
	                                    RUI.Radio,
	                                    { value: "1" },
	                                    "\u4E0D\u9650"
	                                ),
	                                React.createElement(
	                                    RUI.Radio,
	                                    { value: "0" },
	                                    "\u9650\u5236"
	                                )
	                            ),
	                            React.createElement(RUI.Form.Control, {
	                                rowType: "plimit",
	                                name: "number",
	                                type: "input",
	                                disable: this.state.numberDisable,
	                                placeholder: "\u8BF7\u8F93\u51651-9\u7684\u6570",
	                                value: this.state.number,
	                                onChange: this.doNumber
	
	                            }),
	                            React.createElement(
	                                "span",
	                                { className: "deco" },
	                                "\u4EBA\u53C2\u4E0E"
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            null,
	                            React.createElement(
	                                "p",
	                                { style: { paddingBottom: '5px', fontSize: '16px', fontWeight: 'bold', borderBottom: "1px dashed #dadada" } },
	                                "\u6D3E\u5956\u65B9\u5F0F"
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u6D3E\u5956\u65B9\u5F0F\uFF1A", type: "rewardType" },
	                            React.createElement(RUI.Form.Control, {
	                                rowType: "rewardType",
	                                name: "reward",
	                                className: "width_120",
	                                type: "select",
	                                disable: this.state.disable,
	                                stuff: true,
	                                data: selectData
	                            }),
	                            React.createElement(
	                                "span",
	                                { className: "deco grey" },
	                                "\u53C2\u4E0E\u6D3B\u52A8\u5373\u53EF\u62BD\u5956"
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u6BCF\u65E5\u62BD\u5956\u673A\u4F1A\uFF1A", type: "chance" },
	                            React.createElement(
	                                "span",
	                                { className: "deco-l" },
	                                "\u6BCF\u4EBA\u6BCF\u65E5\u6709"
	                            ),
	                            React.createElement(RUI.Form.Control, {
	                                rowType: "chance",
	                                className: "width_80",
	                                name: "chance",
	                                type: "input",
	                                placeholder: "\u8BF7\u8F93\u5165"
	
	                            }),
	                            React.createElement(
	                                "span",
	                                { className: "deco" },
	                                "\u62BD\u5956\u673A\u4F1A"
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            null,
	                            React.createElement(
	                                "p",
	                                { style: { paddingBottom: '5px', fontSize: '16px', fontWeight: 'bold', borderBottom: "1px dashed #dadada" } },
	                                "\u6D3B\u52A8\u9996\u9875\u8BBE\u7F6E"
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u56FE\u7247\u8BBE\u7F6E\uFF1A", type: "cover" },
	                            React.createElement(RUI.Form.Control, {
	                                rowType: "cover",
	                                name: "cover",
	                                type: "upload",
	                                multiple: true,
	                                autoUpload: true,
	                                beforeEdit: this.uploadCheck,
	                                action: "http://image.berbon.com/image/upload/base64zoom",
	                                actionData: this.formatUploadData,
	                                beforeEdit: this.uploadCheck,
	                                onUploadComplete: this.complete,
	                                disable: false,
	                                editable: {
	                                    aspectRatio: 1
	                                },
	                                placeholder: "\u8BF7\u4E0A\u4F20\u56FE\u7247",
	                                list: this.state.list
	                            })
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            null,
	                            React.createElement(
	                                "p",
	                                { style: { paddingBottom: '5px', fontSize: '16px', fontWeight: 'bold', borderBottom: "1px dashed #dadada" } },
	                                "\u6587\u6848\u63CF\u8FF0"
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u6587\u6848\u63CF\u8FF0\uFF1A", type: "desc" },
	                            React.createElement(RUI.Form.Control, {
	                                rowType: "desc",
	                                name: "desc",
	                                type: "textarea",
	                                disable: false,
	                                placeholder: "\u6587\u6848\u63CF\u8FF0"
	                            })
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            { label: "\u63CF\u8FF0\u7C7B\u578B\uFF1A", type: "descType" },
	                            React.createElement(
	                                RUI.Form.Control,
	                                {
	                                    rowType: "descType",
	                                    name: "descType",
	                                    type: "checkbox" },
	                                React.createElement(
	                                    RUI.Checkbox,
	                                    { value: "1", defaultSelected: 0 },
	                                    "\u79D1\u6280"
	                                ),
	                                React.createElement(
	                                    RUI.Checkbox,
	                                    { value: "2", defaultSelected: 0 },
	                                    "\u6444\u5F71"
	                                ),
	                                React.createElement(
	                                    RUI.Checkbox,
	                                    { value: "3", defaultSelected: 0 },
	                                    "\u65C5\u6E38"
	                                ),
	                                React.createElement(
	                                    RUI.Checkbox,
	                                    { value: "4", defaultSelected: 0 },
	                                    "\u5A31\u4E50"
	                                )
	                            )
	                        ),
	                        React.createElement(
	                            RUI.Form.Row,
	                            null,
	                            React.createElement(
	                                RUI.Form.Submit,
	                                null,
	                                "\u4FDD\u5B58"
	                            )
	                        )
	                    )
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
	                React.createElement("textarea", { defaultValue: __webpack_require__(92) })
	            )
	        );
	    }
	});
	
	module.exports = Example;

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = "var CustomControl = React.createClass({\n    render:function() {\n        return <div>\n            <p>这是一个自定义的Control</p>\n            <RUI.Input ref=\"input\" />\n        </div>;\n    }\n});\n\nvar timer = Date.now();\nvar Example = React.createClass({\n    formatUploadData:function(file) {\n        var data = (file || \"\").split(',');\n        var suffix = data[0].match(/data:image\\/(.+);base64/);\n        return {\n            suffix:suffix[1],\n            baseStr:data[1]\n        };\n    },\n    checkImgSizeAndType : function(file, limit) {\n        if (!(/^(jpg|png|jpeg|bmp)$/gi.test(file.data.type.split('/')[1]))) {\n            RUI.DialogManager.alert(\"上传图片只允许JPEG、JPG、PNG、BMP格式的图片!\");\n            return false;\n        }\n        if((file.data.size/(1024*1024)).toFixed(2) > limit) {\n            RUI.DialogManager.alert('上传图片大小只允许'+limit+'M的图片!');\n            return false;\n        }\n        return true;\n    },\n    uploadCheck : function(e) {\n        return this.checkImgSizeAndType(e, 2);\n    },\n    formRules : function() {\n        var _this = this;\n        return {\n            username : {\n                required : true,\n                validator : {\n                    'user' : {\n                        rules: {\n                            required: {\n                                msg: '姓名不能为空'\n                            },\n                            filter: {\n                                reg: 'number',//验证规则\n                                msg: '姓名格式不正确'\n                            },\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc,v) {\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            activity : {\n                required : true,\n                validator : {\n                    'evt' : {\n                        rules: {\n                            required: {\n                                msg: '活动名称不能为空'\n                            },\n                            filter: {\n                                reg: 'name',//验证规则\n                                msg: '活动名称格式不正确'\n                            },\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc) {\n                                //远程校验\n                               /* var form = _this.refs.form;\n                                $.ajax({\n                                    url:'http://shop.berbon.com/react-component/src/js/containers/form/remotes.json',\n                                    type:'get',\n                                    dataType : 'json',\n                                    data:{},\n                                    cache: false,\n                                    beforeSend : function() {\n                                        form.setFieldCheckStatus('evt',{\n                                            validateStatus : 'is-validating',\n                                            explain : ''\n                                        });\n                                    },\n                                    success:function(response) {\n                                        form.setFieldCheckStatus('evt',{\n                                            validateStatus : 'is-success',\n                                            explain : ''\n                                        });\n                                    },\n                                    error:function() {\n                                        form.setFieldCheckStatus('evt',{\n                                            validateStatus : 'is-error',\n                                            explain : '网络错误,请稍后再试！'\n                                        });\n                                    }\n                                });*/\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            time : {\n                required : true,\n                validator : {\n                    'start' : {\n                        rules: {\n                            required: {\n                                msg: '请选择开始时间'\n                            },\n                            trigger: 'onChange',\n                            callback: function(rc,v) {\n                                return true;\n                            }\n                        }\n                    },\n                    'end' :{\n                        rules: {\n                            required: {\n                                msg: '请选择结束时间'\n                            },\n                            trigger: 'onChange',\n                            callback: function(rc,v) {\n                                var form = _this.refs.form;\n                                var start = form.getSingleFieldValue('start');\n                                _this.setState({\n                                    time : v\n                                });\n                                if(start > v) {\n                                    form.setFieldCheckStatus('end',{\n                                        validateStatus : 'is-error',\n                                        explain : '结束时间不能小于开始时间'\n                                    });\n                                    return false;\n                                }\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            people : {\n                required : true,\n                validator : {\n                    'people' : {\n                        rules: {\n                            trigger: 'onChange',\n                            callback: function(rc,v) {\n                                var form = _this.refs.form;\n                                if(!v) {\n                                    rc.setState({\n                                        validateStatus : 'is-error',\n                                        explain : '请选择参与人数限制！'\n                                    });\n                                    return false;\n                                }else {\n                                    rc.setState({\n                                        validateStatus : '',\n                                        explain : ''\n                                    });\n                                    return true;\n                                }\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            plimit : {\n                required : false,\n                validator : {\n                    'limit' : {\n                        rules: {\n                            trigger: 'onChange',\n                            callback: function(rc) {\n                                var value = rc.getValue();\n                                var form = _this.refs.form;\n                                if(value == '1') {\n                                    _this.setState({\n                                        numberDisable : true,\n                                        number : ''\n                                    });\n                                    _this.refs.form.setFieldCheckStatus('number',{\n                                        validateStatus : '',\n                                        explain : ''\n                                    })\n                                }else {\n                                    _this.setState({\n                                        numberDisable : false\n                                    });\n                                }\n                                return true;\n                            }\n                        }\n                    },\n                    'number' : {\n                        rules: {\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc) {\n                                var form = _this.refs.form;\n                                var limit = form.getSingleFieldValue('limit');\n                                if(limit == '0') {\n                                    if(/^[1-9]$/.test(rc.getValue())) {\n                                        form.setFieldCheckStatus('number',{\n                                            validateStatus : 'is-success',\n                                            explain : ''\n                                        });\n                                        return true;\n                                    }else {\n                                        form.setFieldCheckStatus('number',{\n                                            validateStatus : 'is-error',\n                                            explain : '1-9的数'\n                                        });\n                                        return false;\n                                    }\n                                }\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            rewardType : {\n                required : true,\n                validator : {\n                    'reward' : {\n                        rules: {\n                            required: {\n                                msg: '请选择派奖方式'\n                             },\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc) {\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            chance: {\n                required : false,\n                validator: {\n                    'chance' :{\n                        rules: {\n                            filter: {\n                                reg: 'number',\n                                msg: '机会只能为数字'\n                            },\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc) {\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            cover: {\n                required : true,\n                validator: {\n                    'cover' :{\n                        rules: {\n                            required: {\n                                msg: '图片不能为空'\n                            },\n                            callback: function(rc) {\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            desc: {\n                required : true,\n                validator: {\n                    'desc' :{\n                        rules: {\n                            required: {\n                                msg: '描述不能为空'\n                            },\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc) {\n                                return true;\n                            }\n                        }\n                    }\n                }\n            },\n            descType: {\n                required : false,\n                validator: {\n                    'descType' :{\n                        rules: {\n                            required: {\n                                msg: '请至少选择一个类型'\n                            },\n                            trigger: 'onBlur|onChange',\n                            callback: function(rc) {\n                                return true;\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    },\n    componentDidMount : function() {\n        //执行某项表单元校验\n        this.refs.form.validateSingleField('evt');\n    },\n    getInitialState : function() {\n        return {\n            val: \"\",\n            rules : this.formRules(),\n            explain : this.props.explain,\n            numberDisable : false,\n            number : '',\n            disable : false,\n            hide : true,\n            list : ['http://10.2.50.38/images/ae13c4d4dcea406c133ebb6d6f31dca6_1477965048481.JPEG_614_614.JPEG']\n        }\n    },\n    changeName : function(e) {\n        this.setState({\n            value : e.target.value\n        });\n    },\n    doNumber : function(e){\n        this.setState({\n            number:e.target.value\n        });\n    },\n    submitHandler:function(data, form) {\n        //RUI.DialogManager.alert(JSON.stringify(data));\n        console.dir(data);\n        //return false;\n    },\n    complete : function(res,s) {\n        var form = this.refs.form;\n        var uploadList = form.getSingleFieldValue('cover');\n        if(uploadList.length > 0) {\n            form.setFieldCheckStatus('cover',{\n                validateStatus : '',\n                explain : ''\n            });\n        }\n    },\n    render:function() {\n        var selectData = [\n            { key:'请选择', value:0 },\n            { key:'管理员', value:1 },\n            { key:'编辑', value:2 },\n            { key:'审查', value:3 }\n        ];\n        return <div className=\"example-form\">\n            <h2 className=\"title\">表单<span>Form</span></h2>\n            <h3 className=\"sub-title\">演示</h3>\n            <div className=\"example\">\n                <h4 className=\"final-title\">验证</h4>\n                <div>\n                    <div>\n                        <RUI.Form>\n                            <RUI.Form.Row>\n                                <RUI.Form.Control name=\"test\">\n                                    <CustomControl />\n                                    <RUI.Input />\n                                </RUI.Form.Control>\n                            </RUI.Form.Row>\n                        </RUI.Form>\n                    </div>\n                    <RUI.Input onChange={(e)=>this.setState({val:e.target.value})} value={this.state.val} />\n                    <RUI.Form ref=\"form\" className=\"horizonal\" onSubmit={this.submitHandler} rules={this.state.rules}>\n                        <RUI.Form.Row>\n                            <p style={{paddingBottom:'5px',fontSize:'16px',fontWeight:'bold',borderBottom: \"1px dashed #dadada\"}}>基本设置</p>\n                        </RUI.Form.Row>\n                        {/*可以随意DOM元素*/}\n                        {\n                            this.state.hide && (<div className=\"username\" type=\"username\">\n                                <RUI.Form.Control\n                                    rowType=\"username\"\n                                    name=\"user\"\n                                    type=\"input\"\n                                    onChange={this.changeName}\n                                    value={this.state.value}\n                                    placeholder=\"最多输入15个字\"\n                                />\n                            </div>)\n                        }\n                       <div>\n                           <RUI.Form.Row label=\"活动名称：\"  type=\"activity\">\n                               <RUI.Form.Control\n                                   rowType=\"activity\"\n                                   name=\"evt\"\n                                   type=\"input\"\n                                   defaultValue=\"sd\"\n                                   placeholder=\"最多输入15个字\"\n                               />\n                           </RUI.Form.Row>\n                       </div>\n\n                        <RUI.Form.Row label=\"活动时间：\" type=\"time\">\n                           <div>\n                               <RUI.Form.Control\n                                   rowType=\"time\"\n                                   name=\"start\"\n                                   showTime={true}\n                                   type=\"datePicker\"\n                                />\n                               <span className=\"split\"></span>\n                               <RUI.Form.Control\n                                   rowType=\"time\"\n                                   name=\"end\"\n                                   showTime={true}\n                                   value={this.state.time || timer}\n                                   type=\"datePicker\"\n                               >\n                               </RUI.Form.Control>\n                           </div>\n                        </RUI.Form.Row>\n                        <RUI.Form.Row label=\"参与人数：\" type=\"people\">\n                            <RUI.Form.Control\n                                rowType=\"people\"\n                                name=\"people\"\n                                type=\"radio\">\n                                <RUI.Radio value=\"1\">隐藏</RUI.Radio>\n                                <RUI.Radio value=\"0\">显示</RUI.Radio>\n                            </RUI.Form.Control>\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row label=\"参与人数限制：\" type=\"plimit\">\n                            <RUI.Form.Control\n                                rowType=\"plimit\"\n                                defaultValue={\"1\"}\n                                name=\"limit\"\n                                type=\"radio\">\n                                <RUI.Radio value=\"1\">不限</RUI.Radio>\n                                <RUI.Radio value=\"0\">限制</RUI.Radio>\n                            </RUI.Form.Control>\n                            <RUI.Form.Control\n                                rowType=\"plimit\"\n                                name=\"number\"\n                                type=\"input\"\n                                disable={this.state.numberDisable}\n                                placeholder=\"请输入1-9的数\"\n                                value={this.state.number}\n                                onChange={this.doNumber}\n\n                            />\n                            <span className=\"deco\">人参与</span>\n                        </RUI.Form.Row>\n                        <RUI.Form.Row>\n                            <p style={{paddingBottom:'5px',fontSize:'16px',fontWeight:'bold',borderBottom: \"1px dashed #dadada\"}}>派奖方式</p>\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row label=\"派奖方式：\" type=\"rewardType\">\n                            <RUI.Form.Control\n                                rowType=\"rewardType\"\n                                name=\"reward\"\n                                className=\"width_120\"\n                                type=\"select\"\n                                disable={this.state.disable}\n                                stuff={true}\n                                data={selectData}\n                            />\n                            <span className=\"deco grey\">参与活动即可抽奖</span>\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row label=\"每日抽奖机会：\" type=\"chance\">\n                            <span className=\"deco-l\">每人每日有</span>\n                            <RUI.Form.Control\n                                rowType=\"chance\"\n                                className=\"width_80\"\n                                name=\"chance\"\n                                type=\"input\"\n                                placeholder=\"请输入\"\n\n                            />\n                            <span className=\"deco\">抽奖机会</span>\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row>\n                            <p style={{paddingBottom:'5px',fontSize:'16px',fontWeight:'bold',borderBottom: \"1px dashed #dadada\"}}>活动首页设置</p>\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row label=\"图片设置：\" type=\"cover\">\n                            <RUI.Form.Control\n                                rowType=\"cover\"\n                                name=\"cover\"\n                                type=\"upload\"\n                                multiple={true}\n                                autoUpload={true}\n                                beforeEdit={this.uploadCheck}\n                                action=\"http://image.berbon.com/image/upload/base64zoom\"\n                                actionData={this.formatUploadData}\n                                beforeEdit={this.uploadCheck}\n                                onUploadComplete={this.complete}\n                                disable={false}\n                                editable={{\n                                    aspectRatio:1\n                                }}\n                                placeholder=\"请上传图片\"\n                                list={this.state.list}\n                            />\n                        </RUI.Form.Row>\n                        <RUI.Form.Row>\n                            <p style={{paddingBottom:'5px',fontSize:'16px',fontWeight:'bold',borderBottom: \"1px dashed #dadada\"}}>文案描述</p>\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row label=\"文案描述：\" type=\"desc\">\n                            <RUI.Form.Control\n                                rowType=\"desc\"\n                                name=\"desc\"\n                                type=\"textarea\"\n                                disable={false}\n                                placeholder=\"文案描述\"\n                            />\n                        </RUI.Form.Row>\n\n                        <RUI.Form.Row label=\"描述类型：\" type=\"descType\">\n                            <RUI.Form.Control\n                                rowType=\"descType\"\n                                name=\"descType\"\n                                type=\"checkbox\">\n                                <RUI.Checkbox value=\"1\" defaultSelected={0}>科技</RUI.Checkbox>\n                                <RUI.Checkbox value=\"2\" defaultSelected={0}>摄影</RUI.Checkbox>\n                                <RUI.Checkbox value=\"3\" defaultSelected={0}>旅游</RUI.Checkbox>\n                                <RUI.Checkbox value=\"4\" defaultSelected={0}>娱乐</RUI.Checkbox>\n                            </RUI.Form.Control>\n                        </RUI.Form.Row>\n                        <RUI.Form.Row>\n                            <RUI.Form.Submit>保存</RUI.Form.Submit>\n                            {/*<RUI.Form.Reset>重置</RUI.Form.Reset>*/}\n                        </RUI.Form.Row>\n                    </RUI.Form>\n                </div>\n            </div>\n            <h3 className=\"sub-title\">源码</h3>\n            <div className=\"source\">\n                <textarea defaultValue={require('raw!./form.js')} />\n            </div>\n        </div>;\n    }\n});\n\nmodule.exports = Example;\n"

/***/ }

});