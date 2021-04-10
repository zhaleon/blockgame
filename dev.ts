import {webpack} from "webpack";
import {getClientConfig} from "./webpack.config";
import wds from "webpack-dev-server"
import {Server as HTTPServer} from "http"
import execa from "execa"

console.log("once")
const compiler = webpack(getClientConfig());
const server = new wds(compiler)
server.listen(8080)
const httpServer: HTTPServer = server["listeningApp"]
httpServer.on('request', (res) => {
    if (res.url == '/reload') {
        console.log("Reloading frontend")
        server.sockWrite(server.sockets, "content-changed");
    }
})
execa("ts-node-dev", ["server/dev.ts"], {stdio: "inherit"})

