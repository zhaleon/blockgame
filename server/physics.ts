import Entity from "./entity"
import Board from "./board"
import Block from "./block"
import * as constants from "./constants"

function rectIntersect(a: Entity, b: Entity) : boolean {
    return Math.max(a.y+a.height,b.y+b.height) - Math.min(a.y,b.y) <= a.height + b.height + constants.eps 
        && Math.max(a.x+a.width,b.x+b.width) - Math.min(a.x,b.x) <= a.width + b.width + constants.eps 
}

function canMove(a: Entity, b: Entity, direction: number) {
    let sameBoundingBox = rectIntersect(a,b) 
    switch (direction) {
        case 0:
            break
        case 1:
            
            break        
        case 2:
            
            break
        case 3:
             
            break
        default:
            break        
    }

}

function lastBlock() {

}

function nextCollision(board: Board) : Block {
    for (const [, block] of board.blocks) {
        
    } 
    return null
} 

function moveHori(obj: Entity, board: Board, xDisplace: number) { 
    let eps = 1e-1 
    if (xDisplace < 0) {
        for (let [, block] of board.blocks) if (block.x + block.width - eps < obj.x && rectIntersect(obj, block)) {
            block.x += xDisplace
            moveHori(block, board, xDisplace)
        } 
    } else if (xDisplace > 0) { 
        for (let [, block] of board.blocks) if (block.x + eps > obj.x + obj.width && rectIntersect(obj, block)) {
            block.x += xDisplace
            moveHori(block, board, xDisplace)
        } 
    }
}

function moveVert(obj: Entity, board: Board, yDisplace: number) { 
    let eps = 1e-1
    if (yDisplace < 0) {
        for (let [, block] of board.blocks) if (block.y + block.height - eps < obj.y && rectIntersect(obj, block)) {
            block.y += yDisplace
            moveVert(block, board, yDisplace)
        } 
    } else if (yDisplace > 0) { 
        for (let [, block] of board.blocks) if (block.y + eps > obj.y + obj.height && rectIntersect(obj, block)) {
            block.y += yDisplace
            moveVert(block, board, yDisplace)
        } 
    }
}

function processInput(board: Board) {
    for (let i = 0; i < 5; ++i) {
        
    }
}

export function updateBoard(board: Board, dT: number) {

    for (const [, player] of board.players) {
        let normFactor = Math.max(1, Math.sqrt(Math.hypot(player.input[0], player.input[1])))

        let xDisplace = constants.playerSpeed * player.input[0] * dT / normFactor
        let yDisplace = constants.playerSpeed * player.input[1] * dT / normFactor
        moveHori(player, board, xDisplace)
        moveVert(player, board, yDisplace)

        player.x += constants.playerSpeed * player.input[0] * dT / normFactor
        player.y += constants.playerSpeed * player.input[1] * dT / normFactor
    }
    
    return board
}
