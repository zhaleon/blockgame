import {Client, Room} from "colyseus.js";
import Board from "../server/board";

let room: Room<Board>;

export async function initColy() {
    const protocol = location.protocol == 'https:' ? 'wss:' : 'ws:'
    let client = new Client(`${protocol}//${window.location.host}`);
    room = await client.joinOrCreate("tutorial", {username: "greenpizza12"});
    console.log("joined")
}

export function onStateChange(cb: (state: Board) => void) {
    room.onStateChange(cb)
}

export function sendInput(input) {
    room.send("input", input)
}
