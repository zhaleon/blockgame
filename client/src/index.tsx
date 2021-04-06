// // import "../../client.ts"
// // import {BoardUI} from "./boardUI";
// import React from "react";
// // // import Stats from "stats.js"
import ReactDOM from "react-dom";
// // import {Client} from "colyseus.js";
// //
// // (async function () {
// //     let client = new Client("ws://localhost:3000");
// //
// //     const room = await client.joinOrCreate("block", {username: "greenpizza12"});
// //     console.log("joined")
// //     room.onStateChange(state => console.log(state.x,state.bruh))
// //     room.send("input", [1, 0])
// //
// // })();
import {BoardUI} from "./boardUI";
import React from "react";
//
document.body.style.margin = '0'
let root = document.createElement('div');
root.style.height = "100vmin"
root.style.width = "100vmin"
root.style.margin = "auto"
document.body.appendChild(root)

function App() {

    return <BoardUI/>

}


ReactDOM.render(<App/>, root);

