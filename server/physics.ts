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
            if (b.y + b.height == a.y && b.width == 1 && b.x == a.x) return true   
            break
        }
        case 1: {
            if (b.y == a.y + a.height && b.width == 1 && b.x == a.x) return true   
            break
        }
        case 2: {
            if (b.x + b.width == a.x && b.height == 1 && b.y == a.y) return true   
            break
        }
        case 3: {
            if (b.x == a.x + a.width && b.width == 1 && b.y == a.y) return true   
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
    while (true) {
        let ok = false
        for (const [_,block] of board.blocks) {
            if (adjacent(lastBlock ?? player, block, Direction[dir])) {
                ok = true
                lastBlock = block
                toMove.push(block.id)
                break
            }  
        }
        if (!ok) break
    }
    toMove.forEach(i => {
        board.blocks[i].x += dx[Direction[dir]] 
        board.blocks[i].y += dy[Direction[dir]]
    })
}