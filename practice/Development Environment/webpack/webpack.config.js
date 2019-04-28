var path = require('path')
var webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './src'),        // 在 本目录（webpack）下， 找到src这个文件夹
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),     // 输出在本目录下，dist文件夹中
        filename: 'bundle.js',                      //  输出的文件名为bundle.js
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin()       // 压缩打包
    // ]
}