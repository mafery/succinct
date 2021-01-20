const { merge } = require("webpack-merge");
const webpack = require("webpack");
const configBase = require("./webpack.base");

module.exports = merge(configBase, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimizer: []
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
    ],
    // stats: "errors-only"
});