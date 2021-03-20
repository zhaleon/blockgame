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
    playerA[0] = keys.a ? -1 : keys.d ? 1 : 0;
    playerA[1] = keys.w ? -1 : keys.s ? 1 : 0;
    playerB[0] = keys.ArrowLeft ? -1 : keys.ArrowRight ? 1 : 0;
    playerB[1] = keys.ArrowUp ? -1 : keys.ArrowDown ? 1 : 0;
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
    return board
}


ReactDOM.render(<App/>, root);

