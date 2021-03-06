/*
    webpack.config.js webpack的配置文件
    作用：指示webpack干哪些活（当你运行webpack指令时，会加载里面的配置）
    所有构建工具都是基于nodejs平台运行的 模块化默认采用commonjs。
*/


//resolve 用来拼接绝对路径的方法
const {resolve}  =  require('path');

module.exports = {
    //webpack配置
    //入口起点
    entry:'./src/index.js',
    //输出
    output:{
        //输出文件名
        filename:'bulit.js',
        //输出路劲
        //__dirname nodejs的变量，代表当前文件的目录绝对路径
        path: resolve(__dirname,'build')
    },
    module:{
        rules:[
            //详细loader
            {
                test:/\.css$/,
                //使用哪些loader进行处理
                use:[
                    //use数组中loader执行顺序：从右到左，从上到下，依次执行
                    //创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs 模块加载js中，里面内容是样式字符串
                    'css-loader'
                ]
            }
        ]
    },
    //plugins的配置
    plugins:[
        //详细的plugins的配置
    ],
    //模式
    mode:'development',//开发模式
    // mode:'production',//生产模式
}