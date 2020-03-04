const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    optimization: {
        minimize: false
    },
    devtool: 'cheap-module-source-map',
    entry: {
        'out/content/main': [
            '@babel/polyfill',
            './src/content/main.js'
        ],
        'out/background/background': [
            '@babel/polyfill',
            './src/background/background.js'
        ],
        'out/popup/popup': [
            '@babel/polyfill',
            './src/popup/popup.js'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: 'babel-loader',
                query:
                  {
                    presets: ['@babel/preset-react']
                  }
            }
        ],
    },
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.css', '.scss']
    },
    plugins: [
        new CopyPlugin([
            { from: 'src/background/background.html', to: 'out/background/background.html' },
            { from: 'src/popup/popup.html', to: 'out/popup/popup.html' },
            { from: 'manifest.json', to: 'out/manifest.json' },
            { from: 'src/images', to: 'out/images' },
        ]),
    ]
}