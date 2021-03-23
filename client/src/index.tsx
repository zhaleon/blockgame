import {BoardUI} from "./boardUI";
import React from "react";
// import Stats from "stats.js"
import ReactDOM from "react-dom";

// async function main() {
//     let client = new Client("ws://localhost:3000");
//
//     const room = await client.joinOrCreate("block", {username: "greenpizza12"});
//     console.log("joined")
//     room.onStateChange(state => console.log(state))
//     room.send("input", {x: 1, y: 0})
//
// }



// main()
document.body.style.margin = '0'
let root = document.createElement('div');
root.style.height = "100vmin"
root.style.width = "100vmin"
root.style.margin = "auto"
document.body.appendChild(root)


function App() {
    // useEffect(() => {
    //         let lastTime = 0
    //         const loop = (now) => {
    //             // stats.begin()
    //             let delta = (now - lastTime) / 1000
    //             lastTime = now;
    //             board.update(delta)
    //             board.players.get("a").input = playerA
    //             board.players.get("b").input = playerB
    //             setState({board})
    //             // stats.end()
    //             requestAnimationFrame(loop)
    //
    //         }
    //         requestAnimationFrame(loop)
    //     }, []
    // )
    return <BoardUI/>

}


ReactDOM.render(<App/>, root);

