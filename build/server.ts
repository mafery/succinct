import * as express from "express";
import * as webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackDevServer from "webpack-dev-server";

import config from "../config/webpack.common";
const SERVER_HOST = config.devServer.host;
const SERVER_PORT = config.devServer.port;

const app = express();
const compiler = webpack(config);
webpackDevServer.addDevServerEntrypoints(config, config.devServer);
const server = new webpackDevServer(compiler, config.devServer);

server.listen(SERVER_PORT, () => {
    console.log(`Example app listening on port ${SERVER_PORT}! \n`)
});
