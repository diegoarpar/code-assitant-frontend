const path = require('path');

module.exports = {
    entry: "./src/client/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.js']
    },
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
    }
}