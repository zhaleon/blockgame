import express from "express";
import {Server} from "colyseus";
import {createServer} from "http";
import webpack from "webpack";
import config from "./webpack.config"
import {TutorialRoom} from "./server/TutorialRoom";

const port = +process.env.port || 8080;

function compileWebpack(): Promise<string> {
    let configuration = config(null, {mode: "production"});
    return new Promise((res, rej) => {
        let data = webpack(configuration, (err, stats) => {
            if (err) rej(err)
            res(data.outputPath)
        });
    })
}

function attachRooms(game: Server) {
    game.define("tutorial", TutorialRoom)
}

async function main() {
    const app = express()
    const outputPath = await compileWebpack()
    app.use(express.static(outputPath))
    const gameServer = new Server({server: createServer(app)});
    attachRooms(gameServer)
    await gameServer.listen(port);
    console.log("Listening on port " + port)
}

main()

