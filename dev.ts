import {webpack} from "webpack";
import {getClientConfig} from "./webpack.config";
import wds from "webpack-dev-server"
import {Server as HTTPServer} from "http"
import execa from "execa"
console.log(blue("INFO"))
let config = getClientConfig();
const compiler = webpack(config);
const server = new wds(compiler, config.devServer)
server.listen(8080)

function blue(msg) {
    return `\x1B[36m${msg}\x1B[0m`
}

const httpServer: HTTPServer = server["listeningApp"]
httpServer.on('request', (res) => {
    if (res.url == '/reload') {
        console.log(`[${blue("INFO")}] Reloading Frontend`);
        server.sockWrite(server.sockets, "content-changed");
    }
})
execa("ts-node-dev", ["server/dev.ts"], {stdio: "inherit"})

