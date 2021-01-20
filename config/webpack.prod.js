const { merge } = require("webpack-merge");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const configBase = require("./webpack.base");

module.exports = merge(configBase, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimizer: []
    },
    plugins: [
        // 清楚以往打包内容
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
    ],
});