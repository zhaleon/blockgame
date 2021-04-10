import {Configuration, DefinePlugin} from 'webpack';
import 'webpack-dev-server';
import {join} from 'path';
import nodeExternals from 'webpack-node-externals';

import HtmlWebpackPlugin from "html-webpack-plugin";

const TerserPlugin = require('terser-webpack-plugin');

function dir(path: string): string {
    return join(__dirname, path)
}

function getBaseConfig(mode): Configuration {
    let config: Configuration = {
        mode,
        devtool: false,
        resolve: {extensions: [".js", ".ts", ".tsx"]},
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [{loader: 'ts-loader', options: {transpileOnly: true}}]
                }
            ],
        },
    };

    if (mode === 'production') {
        let plugin = new TerserPlugin({
            extractComments: false,
            terserOptions: {output: {comments: false}}
        });
        config.optimization = {
            minimize: true,
            minimizer: [plugin]
        }
    }
    return config


}

export function getClientConfig(mode = 'development'): Configuration {
    let config: Configuration = {
        ...getBaseConfig(mode),
        entry: dir("client/app.tsx"),
        output: {path: dir('dist/client')},
        plugins: [new HtmlWebpackPlugin(),
            new DefinePlugin({
                SERVER_HOST: mode == 'production' ? 'window.location.host' : "'localhost:8081'",

            })
        ],
        devServer: {contentBase: dir('client'),}
    };
    if (mode == 'production') {
        config.plugins.push()
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
        // plugins: [new HtmlWebpackPlugin()],
        // devServer: {contentBase: join(__dirname, 'client'),}
    };
}

export default function (_, argv) {
    const mode = argv.mode ?? 'development'

    return [getClientConfig(mode), getServerConfig(mode)]
}
