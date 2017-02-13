let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    srcDir: path.resolve(__dirname, 'src'),
    distDir: path.resolve(__dirname, 'dist'),
    indexFile: path.resolve(__dirname, 'index.html')
};

const config = {
    entry: {
        app: './src/app.js',
        vendors: ['./node_modules/angular/angular.js']
    },
    output: {
        filename: '[name].[hash].bundle.js',
        path: PATHS.distDir
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                include: [ PATHS.srcDir ],
                use: 'jshint-loader'
            },
            {
                test: /\.js$/,
                include: [ PATHS.srcDir ],
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: PATHS.indexFile,
                loader: "ng-cache-loader?prefix=[dir]/[dir]"
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ PATHS.distDir ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: PATHS.indexFile,
            inject: 'body'
        })
    ]
};

module.exports = config;