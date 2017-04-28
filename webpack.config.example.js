var config = {
    entry:'./example/demo.js',
    output:{
        path:"./example/dist/",
        filename:'demo.js'
    },
    module:{
        loaders:[
            {
                test:/\.(jsx|js)?$/,
                exclude:'./node_modules/',
                loader: 'babel',
                query:{
                    presets:['es2015', 'stage-0', 'react']
                }
            },
            {
                test:/\.(scss|sass)?$/,
                exclude:'./node_modules/',
                loader:'style!css!postcss!sass'
            },
            {
                test:/\.css?$/,
                //注意，因为例如ImageEditor.jsx/Slider.jsx代码中引用了node_modules下的css，所以此处不能排除掉node_modules目录
                loader:'style!css'
            },
            {
                test: /\.md$/,
                loader: "html!markdown"
            },
            {
                test:/\.(jpg|png|gif|jpeg)?$/,
                loader:'url'
            }
        ]
    }

};

module.exports = config;