import express from "express";
import path from "path";
import {attachBackend} from "./server";

const port = +process.env.PORT || 8080;

const app = express()
app.use(express.static(path.join(__dirname, 'client')));
const server = app.listen(port);
attachBackend(server)
console.log("Server running on port " + port)
