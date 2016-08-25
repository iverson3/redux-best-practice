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
                query: {
                    presets: ['es2015', 'react', "stage-2"]
                }
            },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url-loader?limit=8192' }
        ]
    }
};