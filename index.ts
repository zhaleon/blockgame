import express from "express";
import path from "path";
import {attachRooms} from "./server";
import {Server} from "colyseus";

const port = +process.env.PORT || 8080;

const app = express()
app.use(express.static(path.join(__dirname, 'client')));
const server = app.listen(port);
const gameServer = new Server({server});

attachRooms(gameServer)
console.log("Block game running on port " + port)
