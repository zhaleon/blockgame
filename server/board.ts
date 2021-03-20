import Block from "./block"
import Player from "./player"
import Tile from "./tile"
import * as constants from "./constants"

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

    addBlock(x: number, y: number, width: number, height: number) : Block {
        this.blocks.set(Board.numBlocks.toString(), new Block(Board.numBlocks.toString(),x,y,width,height))
        return this.blocks.get((Board.numBlocks++).toString())
    }

    update(dT: number) {
        for (const [, player] of this.players) {
            let normFactor = Math.min(1, Math.sqrt(player.input[0] * player.input[0] + player.input[1] * player.input[1]))
            player.input[0] /= normFactor
            player.input[1] /= normFactor
            player.x += constants.playerSpeed * player.input[0] * dT
            player.y += constants.playerSpeed * player.input[1] * dT
        }
    }
}
