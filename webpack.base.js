const path = require('path');
const entry = require('./config/entry');
const htmlPlugin = require('./config/html');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    entry,
    output:{
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        ...htmlPlugin,
        new OptimizeCSSPlugin({
            cssProcessorOptions: {
                safe: true
            }
        }),
    ],
    performance: {
        hints: false
    },
    module:{
        rules:[
            {
                test: /\.ejs$/,
                loader: 'underscore-template-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: path.posix.join('./','img/[name].[hash:7].[ext]')
                }
            },
        ]
    },
}