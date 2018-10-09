module.exports = {
    plugins: {
        'autoprefixer': {
            browsers: ["android>=4.0", "ios>=7.0", "ie>=8", "> 1% in CN"],
            cascade: true,
            remove: true
        }
    }
};