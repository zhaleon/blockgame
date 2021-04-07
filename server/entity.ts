import { type, Schema } from "@colyseus/schema";
import { Direction, dx, dy } from "./constants"

export default abstract class Entity extends Schema {
    x: number 
    y: number 
    width: number
    height: number
    id: string
     
    willBump(o: Entity, direction: string) : boolean {
        let dir = Direction[direction]
        switch (direction) {
            case 'up' :
                if (this.top == o.bottom && o.left <= this.left && this.right <= o.right) return true 
                break
            case 'down' :
                if (this.bottom == o.top && o.left <= this.left && this.right <= o.right) return true 
                break
            case 'right' :
                if (this.right == o.left && o.bottom >= this.bottom && this.top >= o.top) return true
                break
            case 'left' :
                if (this.left == o.right && o.bottom >= this.bottom && this.top >= o.top) return true
                break
        } 
        return false 
    }

    canMove(o: Entity, direction: string) : boolean {
        if (!this.willBump(o, direction)) return false
        switch (direction) {
            case 'up' : return o.width == 1
            case 'down' : return o.width == 1
            case 'right' : return o.height == 1
            case 'left' : return o.height == 1
        }
    }

    moveUp(dy: number = 1) : void { this.y -= dy }
    moveDown(dy: number = 1) : void { this.y += dy }
    moveLeft(dx: number = 1) : void { this.x -= dx }
    moveRight(dx: number = 1) : void { this.x += dx }

    move(dir: string) : void {
        switch (dir) {
            case 'up' : 
                this.moveUp()
                break
            case 'down':
                this.moveDown()
                break
            case 'left' :
                this.moveLeft()
                break
            case 'right' :
                this.moveRight()
                break
        }
    }

    get top() : number { return this.y }
    get bottom() : number { return this.y + this.height }
    get right() : number { return this.x + this.width }
    get left() : number { return this.x }

    constructor(id: string, x: number, y: number, width: number = 1, height: number = 1) {
        super()
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.id = id
    }    
}
