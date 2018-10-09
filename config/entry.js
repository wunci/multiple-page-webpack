const getView = require('./getView.js')()

let pages = Object.keys(getView);
let entry = {}

pages.forEach(val=>{
    entry[getView[val].split('/')[0]] = val
})

module.exports = entry