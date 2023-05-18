const {resolve} = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (_env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: {
            main: resolve(__dirname, './index')
        },
        output: {
            path: resolve(__dirname, './dist'),
            filename: '[name].[contenthash].js',
            clean: true,
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                },
                {
                    test: /\.s?css$/,
                    use: [
                        isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: resolve(__dirname, './index.html'),
                inject: 'head',
                scriptLoading: 'defer',
            }),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),
        ],
        devtool: 'source-map',
        devServer: {
            port: 8888,
        }
    };
};
