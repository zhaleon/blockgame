import Board from "./board"
import Entity from "./entity";

function findBlock(board: Board, dir: string) {
    return true 
}

export function updateBoard(board: Board, id: string, dir: string) {
    let toMove: Entity[] = [board.players.get(id)] 
    let lastEntity: Entity = board.players.get(id) 
    let canMove = true
    let reps = 0
    while (true) {
        if (++reps > 10000) throw "inf loop sadge"

        let stillMoving = false

        for (const block of board.blocks.values()) {
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

        for (const oplayer of board.players.values()) {
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
        toMove.forEach(entity => entity.move(dir))
    }
}