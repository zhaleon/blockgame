import { type, Schema, MapSchema } from "@colyseus/schema"
import Block from "./block"
import Player from "./player"
import Tile from "./tile"

export default class Board {
    width: number
    height: number
    blocks: Map<string, Block> 
    players: Map<string, Player>
    tiles: Map<string, Tile>

    static numBlocks = 0

    constructor(width: number, height: number) {
        this.width = width
        this.height = height
        this.blocks = new Map<string, Block>()
        this.players = new Map<string, Player>()
    }

    addPlayer(id: string, username: string, x: number, y: number) {
        this.players.set(id, new Player(id,username,x,y))
        return this.players.get(id)
    }

    addBlock(x: number, y: number, width: number, height: number) {
        // this.blocks[Board.numBlocks.toString()] = new Block(x,y,width,height,Board.numBlocks.toString()); 
        this.blocks.set(Board.numBlocks.toString(), new Block(Board.numBlocks.toString(),x,y,width,height))
        return this.blocks.get((Board.numBlocks++).toString())
    }

    step(dT: number) {
             
    }
}
