const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const path = require('path');
const BUILD_DIR = path.resolve(__dirname, 'build');
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    devtool: 'source-map',
    entry: ['babel-polyfill' , APP_DIR + '/index.jsx'],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([
            { from: PUBLIC_DIR + '/assets', to: 'assets' },
        ]),
        new ExtractTextPlugin('app.css', {
            allChunks: true
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: { discardComments: {removeAll: true } },
            canPrint: true
        }),
        new HtmlWebpackPlugin({ 
            title: 'Custom template', 
            template: APP_DIR + '/index.html',
        }),
        // new DashboardPlugin(),
        new CleanWebpackPlugin(['build'], {
            root: '',
            verbose: true,
            dry: false
        })
    ],
    module : {
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
                    [
                        'css?modules&?importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                        'postcss-loader'
                    ]
                )
            },
            { 
                test: /\.(jpe?g|png|gif)$/i, 
                loaders: [ 
                    'file?name=images/[name].[ext]' 
                ] 
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
            },
            {
                test: /\.mp4$/,
                exclude: /node_modules/,
                loader: 'file?limit=10000&mimetype=Video/mp4'
            }
        ]
    }
};

module.exports = config;