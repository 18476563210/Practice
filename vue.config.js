const webpack = require('webpack')

module.exports = {
 configureWebpack: {
   plugins: [
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery",
       Popper: ["popper.js", "default"]
     })
   ],
   devServer:{
		open:true, //自动打开新的浏览窗口
   },
 }
};

//文件打包路径
module.exports = {
 publicPath: './',
 outputDir: '../dist'
}