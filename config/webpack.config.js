const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
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
    optimization: {
        // namedModules: true
    },
    devtool: "inline-source-map",
    devServer: {
        hot: true, //热更新
        open: true, //是否自动打开默认浏览器
        port: "3000",//控制端口
        host: "localhost",//host地址
        // historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../dist/index.html"),
        // proxy:{
        //     '/action':'http://127.0.0.1:8080/'
        // }
    }
}

