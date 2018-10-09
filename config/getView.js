const glob = require('glob')
const path = require('path')

function getView(cmd) {
    let files = new glob.Glob('!(_)*/!(_)*', {
        sync: true,
        cwd: './src/page/'
    });
    // console.log('files',files.found)
    let entries = {};
    files.found.forEach(item => {
        extname = path.extname(item); //后缀
        pathname = './src/page/' + item
        if (extname === '.js') {
            entries[pathname] = item;
        }
    });
    return entries;
}
module.exports = getView