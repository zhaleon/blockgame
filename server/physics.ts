import Entity from "./entity"
import * as constants from "./constants"

export function rectIntersect(a: Entity, b: Entity) : boolean {
    return Math.max(a.y,b.y) - Math.min(a.y+a.height,b.y+b.height) <= a.height + b.height - constants.eps
        && Math.max(a.x+a.width,b.x+b.width) - Math.min(a.x,b.x) <= a.width + b.width - constants.eps  
}


