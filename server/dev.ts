import {Server} from "colyseus";
import {attachRooms} from "./index";

import http from "http";

let port = 8081;

async function main() {
    const gameServer = new Server();
    attachRooms(gameServer)
    await gameServer.listen(port);
    console.log("listening on port " + port)
    http.get("http://localhost:8080/reload")
}

main()
