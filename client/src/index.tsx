import {BoardUI} from "./boardUI";
import {useState} from "react";
import Board from "../../server/board";
// import {Board} from "../../server/board"

const React = require('react');
const ReactDOM = require('react-dom');
document.body.style.margin = '0'
let root = document.createElement('div');
root.style.height = "100vmin"
root.style.width = "100vmin"
root.style.margin = "auto"
document.body.appendChild(root)

let playerALast;
let playerBLast;
// let fake_board = {
//     blocks: new Map([
//         ["0", {id: "0", x: 1, y: 2, width: 1, height: 2}]
//     ]),
//     players: new Map([
//         ["a", {id: "a", x: 0, y: 0, name: "a"}]
//     ]),
//
//     tiles: new Map([
//         ["0", {type: "destination", id: "a", x: 0, y: 0, player: "0"}]
//     ]),
//     width: 5,
//     height: 5
// };

export type entity = { id: string, x: number, y: number, width?: number, height?: number }

// reset()
function getBoard() {

    const board = new Board(5, 5);
    const playerA = board.addPlayer("0", "a", 0, 0);
    const playerB = board.addPlayer("1", "b", 4, 0);
    const blockA = board.addBlock(3, 2, 1, 1)
    const blockB = board.addBlock(4, 2, 1, 1)
    playerA.input = [1, 0]
    playerB.input = [-1, 0]
    return board

}

function App() {
    let [board, setBoard] = useState(getBoard())

    if (!board) return null
    return <BoardUI frame={board}/>

}


// function reset() {
//     board = new Board(5, 5);
//     playerALast = playerBLast = null;
//     board.addPlayer("a", 0, 0)
//     board.addPlayer("b", 7, 7)
//     board.addBlock(1, 0, 3, 1)
//     board.addBlock(2, 1, 1, 2)
//     board.addBlock(5, 0, 1, 2)
//     board.addBlock(3, 3, 3, 3)
//     board.addBlock(0, 6, 1, 1)
//     board.addBlock(1, 7, 3, 1)
//     board.addBlock(7, 5, 1, 2)
//     board.addBlock(6, 2, 1, 1)
//     board.addBlock(7, 1, 1, 1)
//     board.addBlock(0, 2, 2, 2)
// }

let lastTime = 0
// requestAnimationFrame(loop)

// function loop(now) {
//     requestAnimationFrame(loop)
//     let delta = (now - lastTime) / 1000
//     lastTime = now;
//     board.step(delta)
//     App.ref.current.setState({board})
//
// }

ReactDOM.render(<App/>, root);

