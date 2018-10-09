const getView = require('./getView.js')()
const HtmlWebpackPlugin = require('html-webpack-plugin')
let pages = Object.keys(getView);
let html = []
pages.forEach(pathname => {
    let tpName = pathname.split(/\.\w+$/)[0];
    let htmlname = pathname.match(/\/(\w+)\./)[1];
    let conf = {
        filename: `${ htmlname + '.html'}`,
        template: `${ tpName + '.ejs'}`,
        hash: true,
        chunks: [htmlname],
        minify: {
            removeAttributeQuotes: true,
            removeComments: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        },
        chunksSortMode: 'dependency',
        inject: true
    }

    html.push(new HtmlWebpackPlugin(conf));
});
module.exports = html