import {MapSchema, Schema, type} from "@colyseus/schema";
import {Room, Server} from "colyseus";

class Player extends Schema {
    @type("number")
    x: number
    @type("number")
    y: number
    @type("string")
    name: string

    lastMove: { x: number, y: number }
}


class Board extends Schema {
    @type([Player])
    players: MapSchema = new MapSchema()

    update(deltaTime: number) {

    }
}

class BlockRoom extends Room<Board> {
    onCreate(options) {
        this.state = new Board();
        this.onMessage("input", (client, data) => {
            this.state.players[client.id].lastMove = data;
        })

        this.clock.setInterval(() => {
            console.log(this.clock.deltaTime)
            this.state.update(this.clock.deltaTime)
        }, 20)
    }

    onJoin(client, options) {
        const player = new Player(options.username)
        this.state.players.set(client.id, player);
        console.log(options.username)
    }


}


const port = +process.env.port || 3000;

const gameServer = new Server();
gameServer.listen(port);
gameServer.define("block", BlockRoom);

