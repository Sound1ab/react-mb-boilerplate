const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    devtool: 'source-map',
    entry: ['webpack/hot/dev-server', 'babel-polyfill' , APP_DIR + '/index.jsx'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/public/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'src/index.html',
        }),
        new DashboardPlugin(),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        })
    ],
    module : {
        preLoaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loaders: ['eslint'],
                include: APP_DIR

            }
        ],
        loaders : [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1'],
                    plugins: ['transform-react-jsx-img-import']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract(
                    'style?sourceMap',
                    'css?modules&?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader'
                )
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file?name=images/[name].[ext]'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            },
            {
                test: /\.mp4$/,
                exclude: /node_modules/,
                loader: 'file?limit=10000&mimetype=Video/mp4'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    }

};

module.exports = config;