const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index.ts"),
        other: path.resolve(__dirname, "../src/other.ts")
    },
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: "[name].[chunkhash:8].js",
        publicPath: "/"
    },
    resolve: {
        plugins: [new TsconfigPathsPlugin({})]
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(csv|tsv)$/,
                use: ["csv-loader"]
            },
            {
                test: /\.xml$/,
                use: ["xml-loader"]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "succinct web",
            template: path.resolve(__dirname, "../build/index.html")
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
}
