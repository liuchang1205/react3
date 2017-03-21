// Learn more on how to config.
// - https://github.com/ant-tool/atool-build#配置扩展
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: path.join(__dirname+'/src'),
    entry: "./js/root.js",
    devtool: debug ? "inline-sourcemap" : null,
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['react-html-attrs'], //添加组件的插件配置
                }
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' }

        ]
    },
    output: {
        path: __dirname+'/src/',
        filename: "bundle.js"
    }
};