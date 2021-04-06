import Board from "./board"
import Entity from "./entity";
import Player from "./player";

const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

enum Direction {
    up = 1,
    down = 0,
    right = 2,
    left = 3,
}

function adjacent(a: Entity, b: Entity, dir: number) : boolean {
    switch (dir) {
        case 0: {
            if (a.y + a.height == b.y && b.x <= a.x && a.x < b.x + b.width) return true;
            break
        }
        case 1: {
            if (b.y + b.height == a.y && b.x <= a.x && a.x < b.x + b.width) return true;
            break
        }
        case 2: {
            if (a.x + a.width == b.x && b.y <= a.y && a.y < b.y + b.height) return true; 
            break
        }
        case 3: {
            if (a.x == b.x + b.width && b.y <= a.y && a.y < b.y + b.height) return true;
            break
        }
    } 
    return false;
}

function willMove(a: Entity, b: Entity, dir: number) : boolean {
    switch (dir) {
        case 0: {
            if (a.y + a.height == b.y && b.width == 1 && b.x == a.x) return true   
            break
        }
        case 1: {
            if (a.y == b.y + b.height && b.width == 1 && b.x == a.x) return true   
            break
        }
        case 2: {
            if (a.x + a.width == b.x && b.height == 1 && b.y == a.y) return true   
            break
        }
        case 3: {
            if (a.x == b.x + b.width && b.height == 1 && b.y == a.y) return true   
            break
        }
    } 
    return false;
}

function atBorder(a: Entity, dir: number) : boolean {
    switch (dir) {
        case 0: {
            break
        } 
        case 1: {
            break
        }
    }
    return true
}

export function updateBoard(board: Board, player: Player, dir: string) {
    let toMove = [] 
    let canMove = true
    let lastBlock = null 
    let reps = 0
    while (true) {
        if (++reps > 100) break
        let ok = false
        for (const [_,block] of board.blocks) {
            if (adjacent(lastBlock ?? player, block, Direction[dir])) {
                if (willMove(lastBlock ?? player, block, Direction[dir])) {
                    ok = true
                    lastBlock = block
                    toMove.push(block.id)
                } else {
                    console.log(lastBlock ?? player, block)
                    canMove = false;
                }
                break
            }  
        }
        if (!ok || !canMove) break
    }
    // console.log(player)
    if (canMove) {
        board.players.get(player.id).x += dx[Direction[dir]]
        board.players.get(player.id).y += dy[Direction[dir]]
        toMove.forEach(i => {
            board.blocks.get(i).x += dx[Direction[dir]] 
            board.blocks.get(i).y += dy[Direction[dir]]
        })
    }
}