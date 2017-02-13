let webpack = require('webpack');
let path = require('path');

const config = {
    entry: {
        app: './src/app.js',
        vendors: ['./node_modules/angular/angular.js']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    }
};

module.exports = config;