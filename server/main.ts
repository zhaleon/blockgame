import { Block } from "./block"

const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

enum Direction {
    up = 1,
    down = 0,
    right = 2,
    left = 3,
}

function intersects(a: any, b: any, dir: number) {
    // a is the block getting moved
    if (dir == 0) {
        return a.x == b.x && a.y + a.h == b.y
    } else if (dir == 1) {
        return a.x == b.x && a.y == b.y + b.h
    } else if (dir == 2) {
        return a.y == b.y && a.x + a.w == b.x
    } else if (dir == 3) {
        return a.y == b.y && a.x == b.x + b.w
    } else { console.log("direction not in [0,1,2,3]"); throw "bork"; }
}

function canMove(frame: any, object: any, dir: number) {
    object.w = object.w ?? 1
    object.h = object.h ?? 1
    let ok = (dir < 2) ? object.w  == 1 : object.h == 1;
    let ok_x = object.x + dx[dir] + object.w <= frame.width && object.x + dx[dir] >= 0
    let ok_y = object.y + dy[dir] + object.h <= frame.height && object.y + dy[dir] >= 0

    return ok && ok_x && ok_y
}

function getLastBlock(frame: any, player: string, dir: number) {
    if (!canMove(frame, frame.players[player], dir)) return null;

    let lastBlock = frame.players[player]

    while (true) {
        let done = true
        for (const [_, block] of Object.entries(frame.blocks) as any) {
            if (intersects(lastBlock, block, dir)) {
                done = false
                lastBlock = block
            }
        }
        if (done) break;
    }

    return lastBlock.id
}

function getFirstBlock(frame: any, player: string, dir: number) {
    if (!canMove(frame, frame.players[player], dir)) return null;

    for (const [_, block] of Object.entries(frame.blocks) as any) {
        if (intersects(frame.players[player], block, dir)) {
            return block.id
        }
    }

    return null
}

function moveBlocks(frame: any, player: string, dir: number) {
    if (!canMove(frame, frame.players[player], dir)) return;

    let lastBlock = frame.players[player]
    let playerCanMove = true;
    let toMove = []

    while (true) {
        let done = true;
        /* for (let block of frame.blocks) { */
        for (const [_, block] of Object.entries(frame.blocks) as any) {
            if (intersects(lastBlock, block, dir)) {
                done = false
                lastBlock = block
                toMove.push(block.id)
                break
            }
        }
        if (done) break;
    }

    console.log("toMove", toMove, "\nlastBlock", lastBlock)
    if (!canMove(frame, lastBlock, dir)) toMove = [], playerCanMove = false;
    console.log("toMove", toMove, "\nlastBlock", lastBlock)

    if (playerCanMove) {
        frame.players[player].x += dx[dir]
        frame.players[player].y += dy[dir]
    }

    for (let i of toMove) {
        frame.blocks[i].x += dx[dir]
        frame.blocks[i].y += dy[dir]
    }
}

function updateFrame(frame, input) {
    console.log(input.player, "move", input.action);

    moveBlocks(frame, input.player, input.action)

    console.log(frame.players[input.player],"\n");
}

function processInput(frame: any, inputs: any) {
    let toKeep = {}
    for (let input of inputs) input.action = Direction[input.action]

    for (let i = 0; i < inputs.length; ++i) {
        for (let j = i+1; j < inputs.length; ++j) {
            if (getLastBlock(frame, inputs[i].player, inputs[i].action) == getFirstBlock(frame, inputs[j].player, inputs[j].action)
                || getLastBlock(frame, inputs[j].player, inputs[j].action) == getFirstBlock(frame, inputs[i].player, inputs[i].action)) {
                toKeep[i] = true
                toKeep[j] = true
            }
        }
    }

    let newInput = []
    for (let i = 0; i < inputs.length; ++i)
        if (toKeep[i])
            newInput.push(inputs[i])
    inputs = newInput
}

export function step(frame: any, inputs: any) {
    // inputs.forEach(function (input) {});
    processInput(frame, inputs)
    inputs.forEach(input => updateFrame(frame, input));
    return frame
}
