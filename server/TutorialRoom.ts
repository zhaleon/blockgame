import { Room, Client } from "colyseus"
import Player from "./player"
import Board from "./board"

export class TutorialRoom extends Room {
    onCreate(options: any) {
        this.maxClients = 1 
        this.setState(new Board(4,4))
    }

    onJoin(client: Client, options: any) {
        this.state.addPlayer(client.id, options.username, 0, this.state.h - 1)
    }

    onLeave() {
        
    }

    onDispose() {

    }
}