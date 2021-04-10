import {attachFrontend} from "./client";
import express from "express";
import {attachBackend} from "./server";

const port = +process.env.port || 8080;


async function main() {
    const app = express()
    await attachFrontend(app);
    const server = app.listen(8080)
    await attachBackend(server)
    console.log("Listening on port " + port)
}

main()

