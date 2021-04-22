import {Client, Room} from "colyseus"
import Board from "./board"
import * as level from "../levels/tutorial/1.json"

export class TutorialRoom extends Room<Board> {
    onCreate(options: any) {
        this.maxClients = 1
        const board = new Board(8, 8);
        board.addBlock(1, 0, 3, 1)
        board.addBlock(2, 1, 1, 2)
        board.addBlock(5, 0, 1, 2)
        board.addBlock(3, 3, 3, 3)
        board.addBlock(0, 6, 1, 1)
        board.addBlock(1, 7, 3, 1)
        board.addBlock(7, 5, 1, 2)
        board.addBlock(6, 2, 1, 1)
        board.addBlock(7, 1, 1, 1)
        board.addBlock(0, 2, 2, 2)
        this.onMessage("input", (client, dir) => {
            board.update(client.id, dir);
        })
        this.setState(board)
        return
        this.maxClients = 1
        this.setState(new Board(4, 4))
        // this.state.loadFromJSON(level)

        this.onMessage("input", (client, message) => {
            this.state.update(client.id, message)
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
