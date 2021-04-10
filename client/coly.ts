import {Client, Room} from "colyseus.js";
import Board from "../server/board";

let room: Room<Board>;
declare var SERVER_HOST: string;

export async function initColy() {
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
