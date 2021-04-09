import { type, Schema, MapSchema, ArraySchema } from "@colyseus/schema"
import Block from "./block"
import Player from "./player"
import Tile from "./tile"
import { updateBoard } from "./physics"

export default class Board extends Schema {
    @type("uint16")
    width: number

    @type("uint16")
    height: number

    @type({ map: Block })
    blocks: MapSchema<Block>

    @type({ map: Player })
    players: MapSchema<Player>

    @type({ map: Tile })
    tiles: MapSchema<Tile>

    static numBlocks = 0

    constructor(width: number, height: number) {
        super()
        this.width = width
        this.height = height
        this.blocks = new MapSchema<Block>()
        this.players = new MapSchema<Player>()
    }

    loadFromJSON(file: string) : void {
        
    }

    addPlayer(id: string, username: string, x: number, y: number) : Player {
        this.players.set(id, new Player(id,username,x,y))
        return this.players.get(id)
    }

    addBlock(x: number, y: number, width: number, height: number) : Block {
        this.blocks.set(Board.numBlocks.toString(), new Block(Board.numBlocks.toString(),x,y,width,height))
        return this.blocks.get((Board.numBlocks++).toString())
    }

    update(id: string, dir: string) : this {
        updateBoard(this, id, dir)
        return this;
    }
}
