import webpack from "webpack";
import config from "../webpack.config";
import express from "express";

export function attachFrontend(app): Promise<void> {
    let configuration = config(null, {mode: "production"});
    return new Promise((res, rej) => {
        let data = webpack(configuration, (err, stats) => {
            if (err) rej(err)
            app.use(express.static(data.outputPath))
            res()
        });
    })
}
