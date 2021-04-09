const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const TerserPlugin = require("terser-webpack-plugin");

module.exports = function (_, argv) {
    const mode = argv?.mode ?? 'development'
    const config = {
        mode,
        entry: path.join(__dirname, "client"),
        resolve: {extensions: [".js", ".ts", ".tsx"]},
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [{loader: 'ts-loader', options: {transpileOnly: true}}]
                }
            ],
        },
        devtool: false,
        plugins: [new HtmlWebpackPlugin()],
        devServer: {
            contentBase: path.join(__dirname, 'client'),
            headers: {'Cross-Origin-Embedder-Policy': 'require-corp', 'Cross-Origin-Opener-Policy': 'same-origin'}
        }

    };
    if (mode === 'production') {
        config.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin({extractComments:false,terserOptions: {output: {comments: false}}})]
        }
    }
    return config;
}
