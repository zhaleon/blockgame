export class Block {
    // accel: number     
    // velo: number
    x: number
    y: number
    w: number
    h: number
    id: number

    constructor(x,y,w,h,id=0) {
        // this.accel = 0
        // this.velo = 0
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.id = id 
    }
}
