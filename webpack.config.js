const {resolve} = require('node:path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = (_env, argv) => {
    const isProd = argv.mode === 'production';

    return {
        entry: {
            main: resolve(__dirname, './src/index')
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
                template: resolve(__dirname, './src/index.html'),
                inject: 'head',
                scriptLoading: 'defer',
            }),
            new MiniCssExtractPlugin({
                filename: 'style.[contenthash].css',
            }),

            new CopyPlugin({
                patterns: [
                  { from: "./src/images", to: "./src/images" },
                  "./src/images", // absolute or relative, files/directories/globs - see below for examples
                ],
                options: {
                  concurrency: 100,
                },
              }),
        ],
        devtool: 'source-map',
        devServer: {
            port: 8888,
        }
    };
};
