'use strict';

let WebpackDevServer = require('webpack-dev-server');
let Webpack = require('webpack');
let WebpackConfig = require('../webpack.config.js');

let compiler = Webpack(WebpackConfig);

let server = new WebpackDevServer(compiler, WebpackConfig.devServer);


server.listen(WebpackConfig.devServer.port, '127.0.0.1', () => {
    console.log('starting Server on 127.0.0.1:3000');
});