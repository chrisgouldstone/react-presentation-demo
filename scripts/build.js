'use strict';

let Webpack = require('webpack');
let WebpackConfig = require('../webpack.config.js');

let compiler = Webpack(WebpackConfig);

compiler.run((err, stats)=>{
    console.log(err);
    console.log(stats);
});