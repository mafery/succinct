const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");
const configBase = require("./webpack.base");

module.exports = merge(configBase, {
    mode: "development",
    devtool: 'inline-source-map',
    plugins: [
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        hot: true, //热更新
        open: true, //是否自动打开默认浏览器
        port: 3000,//控制端口
        host: "localhost",//host地址
        historyApiFallback: true,
        publicPath: '/',
        progress: true,
        contentBase: path.resolve(__dirname, "dist"),
        // proxy: {
        //     '/api': {
        //         target: 'http://192.168.50.183:21001/',
        //         changeOrigin: true,
        //         secure: false
        //     }
        // }
    }
})
