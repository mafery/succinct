
/***********************    mini-css-extract-plugin    ***********************/
// 安装： npm install --save-dev mini-css-extract-plugin
// MiniCssExtractPlugin.loader 把js中import导入的样式文件，单独打包成一个css文件，结合html-webpack-plugin，以link的形式插入到html文件中。
// PS : 此插件不支持HMR，若修改了样式文件，是不能即时在浏览器中显示出来的，需要手动刷新页面。
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// {
//     test: /\.css$/,
//     // use: [MiniCssExtractPlugin.loader,  "css-loader"] 
// },
// plugins: [
//     new MiniCssExtractPlugin({
//         filename: "static/styles/[name].css",
//         chunkFilename: "static/styles/[id].css"
//     })
// ]


/***********************    使用@babel/preset-typescript取代awesome-typescript-loader和ts-loader    ***********************/
// 参考文档：
// 1. https://juejin.cn/post/6844903792865984520
// 2.https://www.cnblogs.com/vvjiang/archive/2019/12/18/12057811.html
