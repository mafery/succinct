const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "static/js/[name].[chunkhash:8].js",
        chunkFilename: "static/js/[name].[chunkhash:8].js",
        publicPath: "/"
    },
    resolve: {
        // 按顺序解析以上扩展名的文件(必须添加，否则通过import进来的文件无法解析。import时可不写扩展名 默认值为 ['.wasm', '.mjs', '.js', '.json']
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.(t|s)sx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: [
                      '@babel/preset-typescript',
                      '@babel/preset-react',
                      '@babel/preset-env'
                    ],
                    plugins: [  
                        [
                            "styled-components", {
                            "displayName": true
                            }
                        ],
                        "macros",
                        "@babel/plugin-proposal-class-properties"
                    ]
                  }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 8192, //限制打包图片的大小
                        name: "static/images/[name].[hash:8].[ext]", //img:图片打包的文件夹
                    }
                }]
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
        // html 模板
        new HtmlWebpackPlugin({
            title: "succinct web",
            template: path.resolve(__dirname, "../public/index.html")
        }),
    ]
}