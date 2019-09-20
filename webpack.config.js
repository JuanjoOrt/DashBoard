// Imports: Dependencies
const path = require('path');

// Webpack Configuration
const config = {
    entry: {
       app: './src/index.js'
    },
    output: {
        filename: "bundle.js"
    },
    module: {
        rules : [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    plugins: [],
};
// Exports
module.exports = config;