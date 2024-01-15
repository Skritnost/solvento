const path = require('path');

module.exports = {

    // Configure webpack
    configureWebpack: {
        devServer: {
            historyApiFallback: true,
        },
        resolve: {
            // Add '.ts' as a resolvable extension
            extensions: ['.ts', '.js', '.vue', '.json'],
            alias: {
                '@': path.resolve(__dirname, 'src'),
                // Add more aliases as needed
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    },
                },
            ],
        },
    },

    pages: {
        index: {
            entry: 'src/main.ts',
        },
    },
};
