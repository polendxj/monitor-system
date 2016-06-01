var path = require('path')
    , webpack = require('webpack')
    , argv = require('yargs').argv
    , HtmlWebpackPlugin = require('html-webpack-plugin')
    , CopyWebpackPlugin = require('copy-webpack-plugin')
    , plugins = []
;
require('es6-promise').polyfill()
var config = argv.conf || "development";

argv.p && plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
}));

plugins.push(new HtmlWebpackPlugin({
    template: './src/index.ejs',
    hash: true,
    inject: 'body'
}));

plugins.push(new CopyWebpackPlugin([
    { from: 'src/config/' + config + '.js', to: 'config.js' },
    { from: 'static', to: 'js' },
]));

module.exports = {
    entry: {
        main: [path.join(__dirname, "src/entry.js"), path.join(__dirname, "src/static.js")],
    },
    output: {
        devtool: "source-map",
        path: path.join(__dirname, 'build/'),
        publicPath: '/',
        filename: '[name].js',
        sourceMapFilename: '[file].map'
    },
    module: {
        loaders: [ {
            test: /\.less$/,
            loader: "style!css!less"
        }, {
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/,
            loader: 'jsx-loader?harmony'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }, {
            test: /\.(woff|woff2|ttf|eot|svg)(\?v=[1-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader?name=fonts/[hash].[ext]"
        }, {
            test: /\.(png|jpg)$/,
            loader: "url-loader?limit=8192&name=imgs/[hash].[ext]"
        } ]
    },
    plugins: plugins
};
