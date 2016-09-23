/**
 * Created by stefan.wang on 8/5/2016.
 */

var path = require("path");

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, ''),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                // exclude: function(path) {
                //     // 路径中含有 node_modules 的就不去解析
                //     var isNpmModule = !!path.match('node_modules/');
                //     return isNpmModule;
                // },
                query: {
                    presets: ['es2015', 'react', "stage-2"]
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
        ]
    }
};