const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].[hash:8].bundle.js', // 开发环境用hash
  },
  devtool: '#cheap-module-eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(), // 开发环境用于标识模块id
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  module: {
    rules: [{
      test: /\.less$/, // 开发环境不提取css
      use: ['style-loader', 'css-loader', 'less-loader']
    }]
  },
  devServer: {
    stats: "errors-only",
    open: true,
    inline: true,
    hot: true,
    host: "0.0.0.0",
    useLocalIp: true,
    overlay: true
  }
})