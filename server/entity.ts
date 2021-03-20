import { type, Schema } from "@colyseus/schema";

abstract class Entity extends Schema {
    x: number 
    y: number 
    w: number
    h: number
    id: string
     
    constructor() {
        super()
    }    
}
