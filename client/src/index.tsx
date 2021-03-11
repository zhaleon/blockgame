import {addBlock, addPlayer, createFrame, frame, input} from "../../server/tests/helper";
import {Board} from "./board";
import {Component} from "react";

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
reset()


class App extends Component<{}, { frame }> {
    componentDidMount() {
        document.onkeydown = e => {
            if (e.repeat) return
            if (e.key == 'w') playerALast = 'a_up';
            else if (e.key == 's') playerALast = 'a_down';
            else if (e.key == 'a') playerALast = 'a_left';
            else if (e.key == 'd') playerALast = 'a_right';
            if (e.key == 'ArrowUp') playerBLast = 'b_up';
            else if (e.key == 'ArrowDown') playerBLast = 'b_down';
            else if (e.key == 'ArrowLeft') playerBLast = 'b_left';
            else if (e.key == 'ArrowRight') playerBLast = 'b_right';
            if (e.key == 'r') reset()
            input(...[playerALast, playerBLast].filter(item => item))
            playerALast = playerBLast = null;
            this.setState(frame)
        };

    }

    render() {
        return <Board frame={frame}/>

    }
}

function reset() {
    playerALast = playerBLast = null;
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 4, 4)
    addBlock(0, 3, 2, 1, 1)

}


ReactDOM.render(<App/>, root);

