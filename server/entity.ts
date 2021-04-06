import { type, Schema } from "@colyseus/schema";
import { Direction, dx, dy } from "./constants"

export default abstract class Entity extends Schema {
    x: number 
    y: number 
    width: number
    height: number
    id: string
     
    adjacent(o: Entity, dir: string) : boolean {
        dir = Direction[dir]

        return true
    }
    constructor(id: string, x: number, y: number, width: number = 1, height: number = 1) {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.id = id
    }    
}
