const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.base.js');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const cssExtracter = new ExtractTextWebpackPlugin({
  filename: './css/[name].[hash].css',
  allChunks: true,
});
const lessExtracter = new ExtractTextWebpackPlugin({
  filename: './css/[name].[hash].css',
  allChunks: true,
});
module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    lessExtracter,
    cssExtracter
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssExtracter.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true //css压缩
            }
          }, 'postcss-loader'],
          publicPath: '../', // 默认发布路径会是css，会拼接成css/img/xxx.png
        })
      },
      {
        test: /\.less$/,
        use: lessExtracter.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true //css压缩
            }
          }, 'postcss-loader', 'less-loader'],
          publicPath: '../',
        })
      },

    ]
  },
  // 压缩js
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },

})