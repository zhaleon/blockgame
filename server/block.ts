import Entity from "./entity"

export default class Block extends Entity {
    constructor(id: string, x: number, y: number, width: number, height: number) {
        super(id, x, y, width, height)
    }
}
