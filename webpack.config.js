const path = require('path');

module.exports = {
    mode: 'development',
    'optimization': {
        minimize: true
    },
    entry: path.resolve(__dirname, './src/index.js'),
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
        }]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'index.bundle.min.js'
    }
}