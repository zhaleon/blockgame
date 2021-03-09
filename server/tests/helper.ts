import {step} from "../main";
import {list} from "../../client/src/utils";

export let frame: any

export function createFrame(width, height) {
    frame = {width, height, blocks: {}, players: {}}
}

export function addPlayer(name, x, y) {
    frame.players[name] = {name, x, y}
}

export function addBlock(id, x, y, w, h) {
    frame.blocks[id] = {x, y, w, h, id}
}


export function input(...moves) {
    const fixed = moves.flatMap(item => {
        const [player, action, moves] = item.split('_');
        return list(moves ?? 1, () => ({player, action}))
    })
    frame = step(frame, fixed)
    Object.values(frame.players).forEach((player: any) => {
        delete player.w;
        delete player.h;
    })
}

