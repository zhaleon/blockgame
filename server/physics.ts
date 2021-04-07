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

export function updateBoard(board: Board, id: string, dir: string) {
    console.log(dir)
    let toMove = [] 
    let canMove = true
    let lastEntity: Entity = board.players.get(id) 
    let reps = 0
    while (++reps < 10000) {
        let stillMoving = false
        for (const [_,block] of board.blocks) {
            if (lastEntity.willBump(block, dir)) {
                if (lastEntity.canMove(block, dir)) {
                    stillMoving = true
                    lastEntity = block 
                    toMove.push(block)
                } else {
                    canMove = false
                }
                break
            }  
        }
        for (const [_,oplayer] of board.players) {
            if (lastEntity.canMove(oplayer, dir)) {
                stillMoving = true
                lastEntity = oplayer
                toMove.push(oplayer)
                break
            }
        }
        if (!stillMoving || !canMove) break
    }

    if (canMove) {
        board.players.get(id).move(dir)
        toMove.forEach(entity => {
            entity.move(dir)
        })
    }
}