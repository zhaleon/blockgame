import { Block } from "./block"

const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

enum Direction {
    up = 1,
    down = 0,
    right = 2,
    left = 3,
}

let frame = {
    width: 8,
    height: 8,
    players: {
    
    },
    blocks: [
    
    ],
}

function intersects(a: any, b: any, dir: number) {
    if (dir == 0) {
        return a.x == b.x && a.y + a.h == b.y      
    } else if (dir == 1) {
        return a.x == b.x && a.y == b.y + b.h
    } else if (dir == 2) {
        return a.y == b.y && a.x + a.w == b.x
    } else if (dir == 3) {
        return a.y == b.y && a.x == b.x + b.w
    } else { console.log("what?") }
} 

function addBlocks() {
    frame.blocks.push(new Block(1,0,3,1))
    frame.blocks.push(new Block(2,1,1,2))
    frame.blocks.push(new Block(5,0,1,2))
    frame.blocks.push(new Block(3,3,3,3))
    frame.blocks.push(new Block(0,6,1,1))
    frame.blocks.push(new Block(1,7,3,1))
    frame.blocks.push(new Block(7,5,1,2))
    frame.blocks.push(new Block(6,2,1,1))
    frame.blocks.push(new Block(7,1,1,1))
    frame.blocks.push(new Block(0,2,2,2))
}
function addPlayers() {
    frame.players["elephant"] = {x: 0, y: 0, w: 1, h: 1};
    frame.players["greenpizza"] = {x: 0, y: 0, w: 1, h: 1};
}
function canMove(frame: any, object: any, dir: number) {
    object.w = object.w ?? 1
    object.h = object.h ?? 1
    let ok = (dir < 2) ? object.w  == 1 : object.h == 1;
    let ok_x = object.x + dx[dir] + object.w < frame.width && object.x + dx[dir] >= 0
    let ok_y = object.y + dy[dir] + object.h < frame.height && object.y + dy[dir] >= 0

    return ok && ok_x && ok_y
}

function moveBlocks(frame: any, player: any, dir: number) {
    if (!canMove(frame, frame.players[player], dir)) return;

    let lastBlock = frame.players[player] 
    let movable = true;
    let reps = 0
    let toMove = []

    while (++reps < 1000) {
        // console.log(reps, "repetitions")
        let done = true;
        let index = 0
        for (let block of frame.blocks) {
            if (intersects(lastBlock, block, dir)) {
                done = false
                lastBlock = block
                toMove.push(index)
                break
            } 
            index++
        }   
        if (done) break;
    }

    /* console.log("toMove", toMove, "\nlastBlock", lastBlock) */
    if (!canMove(frame, lastBlock, dir)) toMove = [], movable = false;

    if (movable) {
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

    input.action = Direction[input.action]    

    moveBlocks(frame, input.player, input.action)

    console.log(frame.players[input.player]);
}

export function step(frame: any, inputs: any) {
    // inputs.forEach(function (input) {});
    inputs.forEach(input => updateFrame(frame, input));
    return frame
}

function main() {
    addPlayers();
    addBlocks();
    console.log(frame.blocks)
    let inputs = [
        {player: "elephant", action: "right"},
        {player: "elephant", action: "right"},
    ]
    
    frame = step(frame, inputs)
    console.log(frame.blocks)
}

/* main(); */
