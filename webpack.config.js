/**
 *
 *  webpack配置文件
 *
 */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * 入口
 */
module.exports = {
    entry: {
        app: path.resolve('src/app/index.js')
    },
    output: {
        path: path.resolve('dist/'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'sass-loader')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/app.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            }
        }),
        new CopyWebpackPlugin([
            {
                from: 'src/index.html',
                to: ''
            },
            {
                from: 'src/img',
                to: 'img'
            }
        ])
    ]
};
