import Entity from "./entity"

export default class Player extends Entity {
    x: number
    y: number 
    id: string
    username: string
    input: number[]

    constructor(id, username, x, y) {
        super(x,y,id)
        this.username = username 
    }
}