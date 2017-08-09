var path = require("path");
var webpack = require("webpack");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/main.js", // Will contain the root Vue instance
    output: { // Tells Webpack that we want to bundle everything into a file called build.js inside the dist/ folder
        path: path.resolve(__dirname, "./dist"),
        filename: "build.js"
    },
    // This is needed to solve an error about using runtime build where the
    // template option is not available.
    resolve: {
        alias: {
            vue: "vue/dist/vue.js"
        }
    },
    module: {
        // module.loaders is an array of loaders that tell Webpack what to do with
        // certain types of files. In our case, vue-loader deals with vue files that
        // contain the HTML, CSS, and JS for components by bundling them into a
        // single JS module.
        loaders: [
            {
                // Look for any with with the .vue extension (regex)
                test: /\.vue$/,
                loader: "vue-loader"
            },
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: "url-loader",
            //     options: {
            //         limit: 10000,
            //         name: "assets/[name].[hash:7].[ext]"
            //     }
            // }
            // {
            //     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            //     loader: "file-loader",
            //     query: {
            //         name: "assets/[name].[ext]"
            //     }
            // }
        ]
    },
    plugins: [
        // // Include electron as an external dependency
        // new webpack.ExternalsPlugin("commonjs", [
        //     "electron"
        // ]),
        new CopyWebpackPlugin([
            { from: "app/assets", to: "assets" }
        ]),
        new HtmlWebpackPlugin({ // Generates the HTML file based on template and injects webpack bundles
            filename: "index.html", // Output file, will be placed in dist
            template: "app/index.html", // Existing file to use as a base
            inject: true // Inject bundles
        })
    ]
}
