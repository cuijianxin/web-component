var CheckboxItemRender = React.createClass({
    getInitialState:function() {
        return {
            selected:this.props.selected || 0
        };
    },
    componentWillReceiveProps:function(nextProps) {
        if(typeof nextProps.selected != 'undefined') {
            this.setState({
                selected:nextProps.selected
            });
        }
        if(typeof nextProps.data != 'undefined') {
            this.setState(nextProps.data);
        }
    },
    changeHandler:function() {
        this.props.onClick && this.props.onClick(this.state);
    },
    render:function() {
        return <RUI.Checkbox selected={this.state.selected} onChange={this.changeHandler} />
    }
});

var OperationItemRender = React.createClass({
    clickHandler:function() {
        this.props.onClick && this.props.onClick(this.props.data);
    },
    render:function() {
        return <RUI.Button onClick={this.clickHandler}>{this.props.children}</RUI.Button>;
    }
});

var SortTitleRender = React.createClass({
    setData:function(data) {
        this.setState(data);
    },
    render:function() {
        return <a {...this.props}>排序</a>;
    }
});
var Table = React.createClass({
    getInitialState:function() {
        return {
            ajaxData:[{
                id:1,name:"该表格的初始数据",phone:"13312341234", prov:"江苏", role:"扫地僧", desc:'影视 娱乐'
            }],
            fullData:[
                {id:1,name:"张三",phone:"13312341234", prov:"江苏", role:"扫地僧", desc:{tag:'影视 娱乐'}},
                {id:2,name:"李四",phone:"18912341234", prov:"山东", role:"酱油党", desc:{tag:'IT 编程'}},
                {id:3,name:"王五",phone:"13512341234", prov:"浙江", role:"吃瓜群众", desc:{tag:'数码 科技'}},
                {id:4,name:"张三",phone:"13312341234", prov:"江苏", role:"扫地僧", desc:{tag:'影视 娱乐'}},
                {id:5,name:"李四",phone:"18912341234", prov:"山东", role:"酱油党", desc:{tag:'IT 编程'}},
                {id:6,name:"王五",phone:"13512341234", prov:"浙江", role:"吃瓜群众", desc:{tag:'数码 科技'}},
                {id:7,name:"张三",phone:"13312341234", prov:"江苏", role:"扫地僧", desc:{tag:'影视 娱乐'}},
                {id:8,name:"李四",phone:"18912341234", prov:"山东", role:"酱油党", desc:{tag:'IT 编程'}},
                {id:9,name:"王五",phone:"13512341234", prov:"浙江", role:"吃瓜群众", desc:{tag:'数码 科技'}},
                {id:10,name:"张三",phone:"13312341234", prov:"江苏", role:"扫地僧", desc:{tag:'影视 娱乐'}},
                {id:11,name:"李四",phone:"18912341234", prov:"山东", role:"酱油党", desc:{tag:'IT 编程'}},
                {id:12,name:"王五",phone:"13512341234", prov:"浙江", role:"吃瓜群众", desc:{tag:'数码 科技'}}
            ],
            data:this.getData().map(function(item) {
                item.selected = true;
                return item;
            })
        };
    },
    componentDidMount:function() {
        // 假设有一个ajax请求
        setTimeout(function() {
            var list = this.state.ajaxData;
            list.push({
                id:5,name:"拿到的新数据",phone:"13312341234", prov:"江苏", role:"扫地僧", desc:'添加到初始化数据列表'
            });
            this.setState({
                ajaxData: list
            });
        }.bind(this), 2000);
    },
    columnsFilter:function(keys) {
        var index = keys.findIndex(function(item) {
            return item == 'selected';
        });
        if(index > -1) {
            keys.splice(index, 1);
        }
        return keys;
    },
    getData:function() {
        return [
            {id:1,name:"张三",phone:"13599018834", prov:"江苏", role:"扫地僧", desc:'影视 娱乐'},
            {id:3,name:"李四",phone:"13412341234", prov:"山东", role:"酱油党", desc:'IT 编程'},
            {id:2,name:"王五",phone:"18999878899", prov:"浙江", role:"吃瓜群众", desc:'数码 科技'}
        ];
    },
    sortData:function() {
        var array = Array.prototype.slice.call(this.state.data);
        array.sort(function(a, b) {
            return a.id - b.id;
        });
        this.setState({
            data:array
        });
    },
    tableDelete:function(data) {
    	var list = [];
    	this.state.data.map(function(item) {
            if (item.id != data.id) {
            	list.push(item);
            }
       	});
       	this.setState({
            data:list
        });
        RUI.DialogManager.alert(JSON.stringify(data));
    },
    fieldFormat:function(data, source) {
        return (data+"").replace(/(\d{3})(\d{4})(\d{4})/g, function(match, a1, a2, a3) {
            return a1 + '-' + a2 + '-' + a3;
        });
    },
    allCheck:function() {
        var isAllCheck = this.isAllCheck();
        this.setState({
            data:this.state.data.map(function(item) {
                item.selected = isAllCheck ? false : true;
                return item;
            })
        });
    },
    isAllCheck:function() {
        return !this.state.data.some(function(item) {
            return !item.selected;
        });
    },
    checkItem:function(data) {
        this.setState({
            data:this.state.data.map(function(item) {
                if(item.id == data.id) {
                    item.selected = !item.selected;
                }
                return item;
            })
        });
    },
    render:function() {
        var sourceData = this.state.data;

        return <div className="example-table">
            <h2 className="title">表格<span>Table</span></h2>
            <h3 className="sub-title">演示</h3>
            <div className="example">
                <h4 className="final-title">默认表格</h4>
                <div>
                    <RUI.Table dataSource={this.getData()}/>
                </div>
                <h4 className="final-title">动态渲染（异步拿新数据，重新渲染）</h4>
                <div>
                    <RUI.Table dataSource={this.state.ajaxData} columnsFilter={this.columnsFilter} />
                </div>
                <h4 className="final-title">自定义标题格</h4>
                <div>
                    <RUI.Table dataSource={this.getData().slice(0)}>
                        <RUI.Column dataField={"id"} width={80} className="column-item-1" titleClassName="column-title-1">
                            <RUI.Table.TitleRender className="render-title-2">
                                <SortTitleRender onClick={this.sortData} />
                            </RUI.Table.TitleRender>
                        </RUI.Column>
                        <RUI.Column title={"头像"}>
                            <RUI.Table.ItemRender className="render-item-2">
                                <img src="http://img2.imgtn.bdimg.com/it/u=2260333448,2183764270&fm=23&gp=0.jpg" style={{height:80}} />
                            </RUI.Table.ItemRender>
                        </RUI.Column>
                        <RUI.Column title={"用户名"} dataField={"name"} />
                        <RUI.Column title={"手机号"} dataField={"phone"} fieldFunction={this.fieldFormat} />
                        <RUI.Column title={"描述标签"} dataField={"desc"} />
                        <RUI.Column title={"角色"} dataField={"role"} />
                    </RUI.Table>
                </div>
                <h4 className="final-title">自定义单元格</h4>
                <div>
                    <RUI.Table dataSource={sourceData}>
                        <RUI.Column width={75}>
                            <RUI.Table.TitleRender>
                                <CheckboxItemRender onClick={this.allCheck} selected={this.isAllCheck()} />
                            </RUI.Table.TitleRender>
                            <RUI.Table.ItemRender>
                                <CheckboxItemRender onClick={this.checkItem} />
                            </RUI.Table.ItemRender>
                        </RUI.Column>
                        <RUI.Column title={"用户名"} dataField={"name"}/>
                        <RUI.Column title={"手机号"} dataField={"phone"} />
                        <RUI.Column title={"省份"} dataField={"prov"} width={75} />
                        <RUI.Column title={"角色"} dataField={"role"} />
                        <RUI.Column title={"操作"}>
                            <RUI.Table.ItemRender>
                                <OperationItemRender onClick={this.tableDelete}>删除</OperationItemRender>
                            </RUI.Table.ItemRender>
                        </RUI.Column>
                    </RUI.Table>
                </div>
            </div>
        </div>;
    }
});
export {Table};