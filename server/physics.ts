import Board from "./board"
import Entity from "./entity";
import Player from "./player";

const dx = [0,0,1,-1]
const dy = [1,-1,0,0]

enum Direction {
    down = 0,
    up = 1,
    right = 2,
    left = 3,
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
    console.log(dir)
    let toMove = [] 
    let canMove = true
    let lastEntity: Entity = board.players.get(player.id) 
    let reps = 0
    while (true) {
        if (++reps > 10000) throw "inf loop bork" 
        let ok = false
        for (const [_,block] of board.blocks) {
            if (lastEntity.willBump(block, dir)) {
                if (lastEntity.canMove(block, dir)) {
                    ok = true
                    lastEntity = block 
                    // toMove.push(block.id)
                    toMove.push(block)
                } else {
                    console.log(lastEntity ?? player, block)
                    canMove = false
                }
                break
            }  
        }
        for (const [_,oplayer] of board.players) {
            if (lastEntity.canMove(oplayer, dir)) {
                ok = true
                lastEntity = oplayer
                toMove.push(oplayer)
                break
            }
        }
        console.log('test', lastEntity ?? player)
        // also move the player
        if (!ok || !canMove) break
    }

    if (canMove) {
        board.players.get(player.id).x += dx[Direction[dir]]
        board.players.get(player.id).y += dy[Direction[dir]]
        // console.log(board.players.get(player.id))
        // for (const [,block] of board.blocks) console.log(block)
        toMove.forEach(i => {
            i.move(dir)
        })
        // toMove.forEach(i => {
        //     board.blocks.get(i).x += dx[Direction[dir]] 
        //     board.blocks.get(i).y += dy[Direction[dir]]
        // })
    }
}