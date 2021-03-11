const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = function (env, argv) {
    const mode = argv.mode ?? 'development'
    const config = {
        mode,
        output: {path: path.resolve(__dirname, "client/dist")},
        entry: path.join(__dirname, "client/src"),
        resolve: {extensions: [".js", ".ts", ".tsx"]},
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [{loader: 'ts-loader', options: {transpileOnly: true}}]
                },
                // {
                //     test: /\.css$/i,
                //     use: ["style-loader", "css-loader"],
                // },
            ],
        },
        devtool: false,
        plugins: [new HtmlWebpackPlugin()],
        devServer: {contentBase: path.join(__dirname, 'client')}

    };
    if (mode === 'production') {
        config.optimization = {minimize: true, minimizer: [new TerserPlugin({extractComments: false})]}
    }
    return config;
}
