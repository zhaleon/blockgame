import {Server} from "colyseus";
import {TutorialRoom} from "./TutorialRoom";

export function attachRooms(server: Server) {
    server.define("tutorial", TutorialRoom)
}
