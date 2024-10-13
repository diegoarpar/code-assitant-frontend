const path = require('path');
const externals = require('webpack-node-externals');

module.exports = {
    target: 'node', // Since target is node not browser
    entry: "./src/server/index.js", 
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js']
    },
    externals: [externals()], // will not bundle node modules
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
            }
            
        ]
    },
}