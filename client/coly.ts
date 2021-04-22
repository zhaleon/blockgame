import {Client, Room} from "colyseus.js";
import Board from "../server/board";

let room: Room<Board>;
let SERVER_HOST = window.location.host;

export async function initColy() {
    if (process.env.NODE_ENV == "development") SERVER_HOST = "localhost:8081"
    const protocol = location.protocol == 'https:' ? 'wss:' : 'ws:'
    const client = new Client(`${protocol}//${SERVER_HOST}`);
    room = await client.joinOrCreate("tutorial", {username: "greenpizza12"});
    console.log("joined")
}

export function onStateChange(cb: (state: Board) => void) {
    room.onStateChange(cb)
}

export function sendInput(input) {
    room.send("input", input)
}
