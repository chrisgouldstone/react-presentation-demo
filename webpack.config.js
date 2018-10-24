var path = require('path');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src') + '\\app\\index.jsx',
    output: {
        path: path.resolve(__dirname, 'dist') + '\\app',
        filename: 'bundle.js',
    },

    module: {
        strictExportPresence: true,
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['@babel/preset-react']
                    },
                }
            }
        ]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'dist') + '\\app',
        compress: true,
        port: 3000
    }
};
