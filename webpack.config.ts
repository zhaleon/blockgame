import {Configuration} from 'webpack';
import 'webpack-dev-server';
import {join} from 'path';
import nodeExternals from 'webpack-node-externals';

import HtmlWebpackPlugin from "html-webpack-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";

const TerserPlugin = require('terser-webpack-plugin');

function dir(path: string): string {
    return join(__dirname, path)
}

function getBaseConfig(mode): Configuration {
    let config: Configuration = {
        mode,

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
        performance: {
            hints: false,
        },

    };

    if (mode === 'production') {
        config.optimization = {
            minimize: true,
            minimizer: [new TerserPlugin({
                extractComments: false,
                terserOptions: {output: {comments: false}}
            })]
        }
    }
    return config


}

export function getClientConfig(mode = 'development'): Configuration {
    let config: Configuration = {
        ...getBaseConfig(mode),
        entry: dir("client/app.tsx"),
        output: {path: dir('dist/client')},
        plugins: [
            new HtmlWebpackPlugin({favicon: mode == "development" && "logo.png"})
        ],
        devServer: {
            stats: "minimal",
            publicPath: '/',
            contentBase: dir('client')
        }
    };
    if (mode == "production") {
        config.plugins.push(new FaviconsWebpackPlugin(dir('client/logo.png')));
    }
    return config;
}

function getServerConfig(mode): Configuration {
    return {
        ...getBaseConfig(mode),
        entry: dir('index.ts'),
        output: {filename: 'index.js'},
        target: 'node',
        externals: [nodeExternals()]
    };
}

// noinspection JSUnusedGlobalSymbols
export default function (_, argv) {
    const mode = argv.mode ?? 'development'

    return [getClientConfig(mode), getServerConfig(mode)]
}
