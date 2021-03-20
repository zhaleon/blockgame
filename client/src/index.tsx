import {BoardUI} from "./boardUI";
import Board from "../../server/board";
import {useEffect, useState} from "react";
// import {Board} from "../../server/board"

const React = require('react');
const ReactDOM = require('react-dom');
document.body.style.margin = '0'
let root = document.createElement('div');
root.style.height = "100vmin"
root.style.width = "100vmin"
root.style.margin = "auto"
document.body.appendChild(root)
let playerA = [0, 0]
let playerB = [0, 0]


function App() {
    let [state, setState] = useState({board: reset()})
    useEffect(() => {
            let lastTime = 0
            const loop = (now) => {
                requestAnimationFrame(loop)
                let delta = (now - lastTime) / 1000
                lastTime = now;
                state.board.update(delta)
                state.board.players.get("a").input = playerA
                state.board.players.get("b").input = playerB
                // console.log(state.board.players.get("a").input)
                setState({board: state.board})
            }
            requestAnimationFrame(loop)
        }, []
    )
    return <BoardUI frame={state.board}/>

}

document.onkeydown = ({key}) => {
    if (key == "w") playerA = [0, -1]
    else if (key == "a") playerA = [-1, 0]
    else if (key == "s") playerA = [0, 1]
    else if (key == "d") playerA = [1, 0]
    if (key == "ArrowUp") playerB = [0, -1]
    else if (key == "ArrowLeft") playerB = [-1, 0]
    else if (key == "ArrowDown") playerB = [0, 1]
    else if (key == "ArrowRight") playerB = [1, 0]
}

function reset() {
    let board = new Board(8, 8);
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
    window["board"] = board
    return board
}


ReactDOM.render(<App/>, root);

