const path = require("path")
const htmlWebpack = require("html-webpack-plugin"); 
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry:{
        index:"./src/index.js",
        product:"./src/products.js",
    },
    output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname,"dist"),
    },
    devServer:{
        static:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader',"css-loader"]
            },
            {
                test:/\.s[ac]ss$/,
                use:['style-loader',"css-loader","sass-loader"]
            },
            {
                test:/\.(png|jpeg|jpg|svg)$/,
                type:"asset/resource"
            }
        ]
    },
    plugins:[
        new htmlWebpack({
            template:path.resolve(__dirname,"src/index.html"),
            chunks:["index"],
            inject:true,
            filename:"index.html",
        }),
        new htmlWebpack({
            template:path.resolve(__dirname,"src/products.html"),
            chunks:["product"],
            inject:true,
            filename:"products.html",
        }),
        new CopyPlugin({
            patterns:[
                {
                    from:path.resolve(__dirname,"src/assets/*"),
                    to:path.resolve(__dirname,"dist"),
                    context:"src"
                }
            ]
        })
    ]
}