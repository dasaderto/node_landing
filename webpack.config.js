const path = require('path');

module.exports = {
    mode: 'development',
    entry: './public/js/script.js',
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'bundle.js'
    }
};