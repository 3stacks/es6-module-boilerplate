const pkg = require('./package.json');

module.exports = {

    entry: {
        'app': './src/index.js'
    },
    output: {
        path: './',
        filename: 'index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    plugins: [
                        'transform-runtime'
                    ],
                    presets: [
                        'es2015'
                    ]
                }
            }
        ]
    }
};