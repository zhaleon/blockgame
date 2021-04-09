import {Client, Room} from "colyseus.js";
import Board from "../server/board";

let room: Room<Board>;

export async function initColy() {
    let client = new Client("ws://localhost:8080");
    room = await client.joinOrCreate("tutorial", {username: "greenpizza12"});
    console.log("joined")
}

export function onStateChange(cb: (state: Board) => void) {
    room.onStateChange(cb)
}

export function sendInput(input) {
    room.send("input", input)
}
