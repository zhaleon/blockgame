import Board from "../board";

export let frame: Board

export function createFrame(width, height) {
    frame = new Board(width, height);
}

export function addPlayer(name, x, y) {
    frame.addPlayer(name, name, x, y)
}

export function addBlock(id, x, y, width, height) {
    frame.addBlock(x, y, width, height)
}

export function getPlayer(id) {
    return frame.players.get(id)
}

export function getBlock(id) {
    return frame.blocks.get(id)
}

export function input(move, times = 1) {
    const [id, action] = move.split('_');
    let player = frame.players.get(id);
    for (let i = 0; i < times; i++) frame.update(player, action)
    return {player, action}

}
