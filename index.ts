import {attachFrontend} from "./client";
import express from "express";
import {attachBackend} from "./server";

const port = +process.env.PORT || 8080;


async function main() {
    const app = express()
    await attachFrontend(app);
    const server = app.listen(port)
    await attachBackend(server)
    console.log("Listening on port " + port)
}

main()

