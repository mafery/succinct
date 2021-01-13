import * as path from "path";
import * as webpack from "webpack";

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: {
        path: path.resolve(__dirname, "../dist/"),
        filename: "[name].[chunkhash].js"
    },
    devServer: {
        hot: true, //热更新
        open: true, //是否自动打开默认浏览器
        port: 3000,//控制端口
        host: "localhost",//host地址
        // historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../dist/index.html"),
        // proxy:{
        //     '/action':'http://127.0.0.1:8080/'
        // }
    }
}

export default config;