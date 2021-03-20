import Entity from "./entity"

export default class Block extends Entity {
    x: number
    y: number
    width: number
    height: number
    id: string 

    constructor(x,y,width,height,id) {
        super(id,x,y,width,height)
    }
}
