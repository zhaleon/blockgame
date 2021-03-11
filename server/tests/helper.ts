import {step} from "../main";
import {repeat} from "../../client/src/utils";

export let frame: any

export function createFrame(width, height) {
    frame = {width, height, blocks: {}, players: {}}
}

export function addPlayer(name, x, y) {
    frame.players[name] = {name, x, y}
}

export function addBlock(id, x, y, width, height) {
    frame.blocks[id] = {x, y,  width,  height, id}
}


export function input(...moves) {
    let last = moves[0];
    let count = last === +last ? moves.shift() : 1;
    console.log(count)

    repeat(count, () => {
        const fixed = moves.map(item => {
            const [player, action] = item.split('_');
            return {player, action}
        })
        return frame = step(frame, fixed);
    })
    Object.values(frame.players).forEach((player: any) => {
        delete player.width;
        delete player.height;
    })
}
