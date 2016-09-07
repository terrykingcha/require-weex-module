const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'we', 'index.we?entry'),
    output: {
        path: path.resolve(__dirname, 'we', 'dist'),
        filename: 'index.js'
    },
    module: {
        loaders: [{
            test: /\.we(\?[^?]+)?$/,
            loaders: ['weex']
        }, {
            test: /\.js/,
            loaders: ['babel?presets[]=es2015']
        }]
    }
}