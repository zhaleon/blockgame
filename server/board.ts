import Block from "./block"
import Player from "./player"
import Tile from "./tile"
import { updateBoard } from "./physics"
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

    update(player: Player, dir: string) : this {
        updateBoard(this, player, dir)
        return this;
    }
    // update(dT: number) : this {
    //     updateBoard(this, dT)
    //     return this
    //     for (const [, player] of this.players) {
    //         let normFactor = Math.max(1, Math.sqrt(Math.hypot(player.input[0], player.input[1])))
    //         player.x += constants.playerSpeed * player.input[0] * dT / normFactor
    //         player.y += constants.playerSpeed * player.input[1] * dT / normFactor
    //     }
    //     return this
    // }
}
