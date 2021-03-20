import Block from "./block"
import Player from "./player"
import Tile from "./tile"

export class Board {
    width: number
    height: number
    blocks: Map<string, Block> 
    players: Map<string, Player>
    tiles: Map<string, Tile>

    static num_blocks = 0

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.blocks = new Map<string, Block>()
        this.players = new Map<string, Player>()
    }

    addPlayer(id: string, username: string, x: number, y: number) {
        this.players[id] = new Player(id,username,x,y)
        return this.players[id]
    }

    addBlock(x: number, y: number, width: number, height: number) {
        this.blocks[Board.num_blocks.toString()] = new Block(x,y,width,height,Board.num_blocks.toString()); 
        return this.blocks[(Board.num_blocks++).toString()]
    }

    step(dT: number) {
             
    }
}
