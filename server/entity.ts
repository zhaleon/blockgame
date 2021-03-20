import { type, Schema } from "@colyseus/schema";

export default abstract class Entity extends Schema {
    x: number 
    y: number 
    width: number
    height: number
    id: string
     
    constructor(x: number, y: number, id: string, width: number = 1, height: number = 1) {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.id = id
    }    
}
