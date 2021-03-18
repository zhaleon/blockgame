import {BoardUI} from "./boardUI";
import {Component, useRef} from "react";
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
let board;

reset()

requestAnimationFrame(loop)


class App extends Component<{}, { board }> {
    static ref = useRef<App>()

    render() {
        if (!this.state.board) return null
        return <BoardUI frame={board}/>
    }

}


function reset() {
    board = new Board(5, 5);
    playerALast = playerBLast = null;
    board.addPlayer("a", 0, 0)
    board.addPlayer("b", 7, 7)
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
}

let lastTime = 0

function loop(now) {
    requestAnimationFrame(loop)
    let delta = (now - lastTime) / 1000
    lastTime = now;
    board.step(delta)
    App.ref.current.setState({board})

}

ReactDOM.render(<App/>, root);

