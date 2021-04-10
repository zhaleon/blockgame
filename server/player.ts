import Entity from "./entity"

export default class Player extends Entity {
    username: string

    constructor(id: string, username: string, x: number, y: number) {
        super(id, x, y)
        this.username = username
    }
}
