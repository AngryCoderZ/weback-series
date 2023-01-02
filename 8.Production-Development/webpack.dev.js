const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const { merge } = require("webpack-merge");
const webpackCommon = require('./webpack.common')

module.exports = merge(webpackCommon, {
    mode: "development",
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.s[ac]ss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    plugins: [
        // new BundleAnalyzerPlugin({})
    ],
})