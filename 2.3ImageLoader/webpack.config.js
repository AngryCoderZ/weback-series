const path=require("path")

module.exports ={
    entry: './src/index.js',
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,"dist")
    },
    module:{
        rules:[
            {
                test: /\.(css)$/,
                // use:["style-loader","css-loader"]
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader",options:{modules:true}}
                ]
            },
            {
                test:/\.s[ac]ss$/,
                use:[
                    {loader:"style-loader"},
                    {loader:"css-loader"},
                    // {loader:"css-loader",options:{modules:true}},
                    {loader:"sass-loader"}
                ]
            },
            {
                test:/\.(png|jpeg|jpg|svg)$/,
                type:"asset/resource"
            }
        ]
    }
}
