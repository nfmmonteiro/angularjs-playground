let webpack = require('webpack');
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let UglifyJsPlugin = require('webpack-uglify-js-plugin');

console.log('NODE_ENV:', process.env.NODE_ENV);

const PATHS = {
    srcDir: path.resolve(__dirname, 'src'),
    distDir: path.resolve(__dirname, 'dist'),
    indexFile: path.resolve(__dirname, 'index.html'),
    uglifyCacheDir: path.resolve(__dirname, 'dist/cached_uglify/')
};

const config = {
    entry: {
        app: './src/app.js',
        vendors: [
            './node_modules/angular/angular.js',
            './node_modules/angular-animate/angular-animate.js',
            './node_modules/angular-ui-bootstrap/index.js'
        ]
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
                include: [ PATHS.srcDir ],
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
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: PATHS.indexFile,
            inject: 'body'
        }),
        new ExtractTextPlugin('styles.css')
    ]
};

if (process.env.NODE_ENV == 'prod') {
    config.plugins.unshift(new CleanWebpackPlugin([ PATHS.distDir ]));
    config.plugins.push(new UglifyJsPlugin({
        cacheFolder: PATHS.uglifyCacheDir,
        minimize: true,
        output: {
            comments: false
        },
        compressor: {
            warnings: false
        }
    }));
}

module.exports = config;