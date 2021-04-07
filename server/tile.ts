import { type, Schema } from "@colyseus/schema"

export default class Tile extends Schema {
    type: string
    x: number
    y: number
    id: number
    player: string

    constructor() {
        super()
    }
}
