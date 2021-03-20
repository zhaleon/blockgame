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

    addPlayer(id: string, username: string, x: number, y: number) : Player {
        this.players.set(id, new Player(id,username,x,y))
        return this.players.get(id)
    }

<<<<<<< HEAD
    addBlock(x: number, y: number, width: number, height: number) : Block {
        // this.blocks[Board.numBlocks.toString()] = new Block(x,y,width,height,Board.numBlocks.toString()); 
=======
    addBlock(x: number, y: number, width: number, height: number) {
>>>>>>> 6ad2d2a8a736c60d09a8b2fbf8ad3a91321bcfad
        this.blocks.set(Board.numBlocks.toString(), new Block(Board.numBlocks.toString(),x,y,width,height))
        return this.blocks.get((Board.numBlocks++).toString())
    }

<<<<<<< HEAD
    update(dT: number) : void {
        for (const [_, player] of this.players) { 
            player.x += player.input[0] * dT 
            player.y += player.input[1] * dT 
=======
    update(dT: number) {
        for (const [, player] of this.players) {
            player.x += player.input[0] * dT
            player.y += player.input[1] * dT
>>>>>>> 6ad2d2a8a736c60d09a8b2fbf8ad3a91321bcfad
        }
    }
}
