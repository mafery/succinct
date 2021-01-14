const { merge } = require("webpack-merge");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const configBase = require("./webpack.base");

module.exports = merge(configBase, {
    mode: "production",
    optimization: {
        minimizer: [new UglifyJsPlugin({sourceMap: true})],
    },
    plugins: []
});