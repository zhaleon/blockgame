import Entity from "./entity"

export default class Player extends Entity {
    x: number
    y: number 
    id: string
    username: string
    input: number[]

    constructor(id: string, username: string, x: number, y: number) {
        super(id,x,y)
        this.username = username 
        this.input = [0, 0]
    }
}
