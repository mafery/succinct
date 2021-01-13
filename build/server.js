const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackDevServer = require("webpack-dev-server");

const config = require("../config/webpack.config.js");
const SERVER_HOST = config.devServer.host;
const SERVER_PORT = config.devServer.port;

const app = express();
const compiler = webpack(config);
webpackDevServer.addDevServerEntrypoints(config, config.devServer);
const server = new webpackDevServer(compiler, config.devServer);

server.listen(SERVER_PORT, () => {
    console.log(`Example app listening on port ${SERVER_PORT}! \n`)
});