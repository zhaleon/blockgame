export class Block {
    // accel: number
    // velo: number
    x: number
    y: number
    width: number
    height: number
    id: number

    constructor(x,y,width,height,id=0) {
        // this.accel = 0
        // this.velo = 0
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.id = id
    }
}
