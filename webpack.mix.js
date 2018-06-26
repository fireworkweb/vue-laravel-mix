/* global require, __dirname */
const mix = require('laravel-mix');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const vendor = [
    'vue',
];

const webpackConfig = {
    devServer: {
        overlay: true,
        contentBase: 'dist',
    },

    output: {
        publicPath: '',
    },

    resolve: {
        alias: {
            '~': resolve(__dirname, 'src'),
        },
    },

    plugins: [
        new CleanWebpackPlugin([
            'dist/*',
        ], {
            exclude: [
                '.gitignore',
            ],
        }),
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'src/index.html'),
        }),
    ],
};

mix
    .webpackConfig(webpackConfig)
    .js('src/js/main.js', 'dist')
    .copyDirectory('src/assets', `dist/assets`)
    .extract(vendor)
    .setPublicPath('dist')
    .setResourceRoot('/')
    .sourceMaps(false)
    .disableNotifications();
