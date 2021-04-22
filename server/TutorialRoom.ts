import {Client, Room} from "colyseus"
import Board from "./board"
import * as level from "../levels/tutorial/1.json"

export class TutorialRoom extends Room {
    onCreate(options: any) {
        this.maxClients = 1
        this.setState(new Board(4, 4))
        this.state.loadFromJSON(level)

        this.onMessage("input", (client, message) => {
            this.state.update(message, client.id)
        })
    }

    onJoin(client: Client, options: any) {
        this.state.addPlayer(client.id, options.username, 2, this.state.height - 1)
    }

    onLeave() {

    }

    onDispose() {

    }
}
