let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let UglifyJsPlugin = require('webpack-uglify-js-plugin');

const PATHS = {
    srcDir: path.resolve(__dirname, 'src'),
    distDir: path.resolve(__dirname, 'dist'),
    indexFile: path.resolve(__dirname, 'index.html'),
    uglifyCacheDir: path.resolve(__dirname, 'dist/cached_uglify/')
};

const config = {
    entry: {
        app: './src/app.js',
        vendors: ['./node_modules/angular/angular.js', './node_modules/angular-animate/angular-animate.js']
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
                use: ['ng-annotate-loader', 'babel-loader']
            },
            {
                test: /\.html$/,
                exclude: PATHS.indexFile,
                loader: 'ng-cache-loader?prefix=[dir]/[dir]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                use: 'url-loader?name=[name]-[hash].[ext]'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin([ PATHS.distDir ]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        }),
        new UglifyJsPlugin({
            cacheFolder: PATHS.uglifyCacheDir,
            minimize: true,
            output: {
                comments: false
            },
            compressor: {
                warnings: false
            }
        }),
        new HtmlWebpackPlugin({
            template: PATHS.indexFile,
            inject: 'body'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};

module.exports = config;