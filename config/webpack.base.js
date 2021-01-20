const path = require("path");
const webpack = require("webpack");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "../src/index.tsx")
    },
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "static/js/[name].[chunkhash:8].js",
        publicPath: "/"
    },
    resolve: {
        // plugins: [new TsconfigPathsPlugin({})],
        // 按顺序解析以上扩展名的文件(必须添加，否则通过import进来的文件无法解析。import时可不写扩展名 默认值为 ['.wasm', '.mjs', '.js', '.json']
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    optimization: {
        // splitChunks: {
        //     cacheGroups: {
        //         vendors: {
        //             test: /[\\/]node_modules[\\/]/,
        //             name: "vendors",
        //             chunks: "all"
        //         }
        //     }
        // }
    },
    module: {
        rules: [
            // {
            //     test: /\.tsx?$/,
            //     use: "ts-loader",
            //     exclude: /node_modules/
            // },
            {
                test: /\.(ts|js)x?$/,
                use: ['ts-loader', 'babel-loader'],
                include: path.resolve('src')
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            // {
            //     test: /\.(png|svg|jpg|gif)$/,
            //     use: [{
            //         loader:'url-loader',
            //         options:{
            //             limit: 8192, //限制打包图片的大小
            //             // name: "images/[name].[hash:8].[ext]", //img:图片打包的文件夹
            //         }
            //     }]
            // },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: ["file-loader"]
            // },
            // {
            //     test: /\.(csv|tsv)$/,
            //     use: ["csv-loader"]
            // },
            // {
            //     test: /\.xml$/,
            //     use: ["xml-loader"]
            // }
        ]
    },
    plugins: [
        // 清楚以往打包内容
        new CleanWebpackPlugin(),
        // html 模板
        new HtmlWebpackPlugin({
            title: "succinct web",
            template: path.resolve(__dirname, "../public/index.html")
        }),
        // 热更新
        new webpack.HotModuleReplacementPlugin(),
        // new MiniCssExtractPlugin({
        //     filename: "styles/[name].css",
        //     chunkFilename: "styles/[id].css"
        // })
    ]
}
