import "./style.css"
import {Board} from "./board";
import {Component} from "react";
import {addBlock, addPlayer, createFrame, frame, input} from "../../server/tests/helper";

var React = require('react');
var ReactDOM = require('react-dom');
let node = document.createElement('div');
document.body.appendChild(node)
let playerALast;
let playerBLast;

function reset() {
    playerALast = playerBLast = null;
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 4, 4)
    addBlock(0, 3, 2, 1, 1)

}

reset()


class MyComponent extends Component {
    state = frame

    componentDidMount() {
        setInterval(() => {
            input(...[playerALast, playerBLast].filter(item => item))
            playerALast = playerBLast = null;
            this.setState(frame)
        }, 250)
        document.onkeydown = e => {
            if (e.key == 'w') playerALast = 'a_up';
            else if (e.key == 's') playerALast = 'a_down';
            else if (e.key == 'a') playerALast = 'a_left';
            else if (e.key == 'd') playerALast = 'a_right';
            else if (e.key == 'r') reset()
            else return

        };
    }

    render() {
        return <Board frame={this.state}/>
    }

}


ReactDOM.render(<MyComponent/>, node);
