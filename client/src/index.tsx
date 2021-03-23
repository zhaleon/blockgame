import {BoardUI} from "./boardUI";
import Board from "../../server/board";
import React, {useEffect, useState} from "react";
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

let board;


// main()
document.body.style.margin = '0'
let root = document.createElement('div');
root.style.height = "100vmin"
root.style.width = "100vmin"
root.style.margin = "auto"
document.body.appendChild(root)
let playerA = [0, 0]
let playerB = [0, 0]

let initialState = {board: reset()};
// var stats = new Stats();
// stats.showPanel(0); // 0: fps, 1: ms, 2: mb, 3+: custom
// document.body.appendChild(stats.dom);

function App() {
    let [state, setState] = useState(initialState)
    useEffect(() => {
            let lastTime = 0
            const loop = (now) => {
                // stats.begin()
                let delta = (now - lastTime) / 1000
                lastTime = now;
                board.update(delta)
                board.players.get("a").input = playerA
                board.players.get("b").input = playerB
                setState({board})
                // stats.end()
                requestAnimationFrame(loop)

            }
            requestAnimationFrame(loop)
        }, []
    )
    return <BoardUI frame={state.board}/>

}

let keys: any = {}
document.onkeydown = ({key}) => {
    keys[key] = true
    updateInputs()
}
document.onkeyup = ({key}) => {
    keys[key] = false
    updateInputs()
}

function updateInputs() {
    if (keys.r) reset()
    playerA[0] = keys.a ? -1 : keys.d ? 1 : 0;
    playerA[1] = keys.w ? -1 : keys.s ? 1 : 0;
    playerB[0] = keys.ArrowLeft ? -1 : keys.ArrowRight ? 1 : 0;
    playerB[1] = keys.ArrowUp ? -1 : keys.ArrowDown ? 1 : 0;
}

function reset() {
    board = new Board(8, 8);
    board.addPlayer("a", "c", 0, 0)
    board.addPlayer("b", "d", 7, 7)
    board.addBlock(1, 0, 3, 1)
    board.addBlock(2, 1, 1, 2)
    board.addBlock(5, 0, 1, 2)
    board.addBlock(3, 3, 3, 3)
    board.addBlock(0, 6, 1, 1)
    board.addBlock(1, 7, 3, 1)
    board.addBlock(7, 5, 1, 2)
    board.addBlock(6, 2, 1, 1)
    board.addBlock(7, 1, 1, 1)
    board.addBlock(0, 2, 2, 2)
    return board
}


ReactDOM.render(<App/>, root);

