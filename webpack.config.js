let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let distFolder = path.resolve(__dirname, 'dist');
let indexFile = path.resolve(__dirname, 'index.html');

const config = {
    entry: {
        app: './src/app.js',
        vendors: ['./node_modules/angular/angular.js']
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: distFolder
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: indexFile,
                loader: "ng-cache-loader?prefix=[dir]/[dir]"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: indexFile,
            inject: 'body'
        })
    ]
};

module.exports = config;