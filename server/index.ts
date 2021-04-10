import {Server} from "colyseus";
import {TutorialRoom} from "./TutorialRoom";

export function attachBackend(server: any) {
    const gameServer = new Server({server});
    gameServer.define("tutorial", TutorialRoom)
}
