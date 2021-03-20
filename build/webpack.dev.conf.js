const  webpack = require('webpack');
const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
mode: 'development',
devServer: {
    overlay: true,
    open: true,
    port: 8081
},

plugins: [
    new webpack.SourceMapDevToolPlugin({
        filename: '[filename].js.map'
    })
]
})

module.exports = new Promise((resolve, reject) =>{
resolve(devWebpackConfig);
})