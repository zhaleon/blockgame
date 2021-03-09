import "./style.css"
import {Board} from "./board";
import {Component} from "react";
import {addBlock, addPlayer, createFrame, frame, input} from "../../server/tests/helper";

var React = require('react');
var ReactDOM = require('react-dom');
let node = document.createElement('div');
document.body.appendChild(node)
createFrame(5, 5)
addPlayer("a", 0, 0)
addPlayer("b", 4, 4)
addBlock(0, 3, 2, 1, 1)

class MyComponent extends Component {
    state = frame

    componentDidMount() {
        document.onkeydown = (e) => {
            if (e.key == 'w') input('a_up');
            else if (e.key == 's') input('a_down');
            else if (e.key == 'a') input('a_left');
            else if (e.key == 'd') input('a_right');
            else return
            this.setState(frame)
            console.log(frame)

        };

    }

    render() {
        return <Board frame={this.state}/>
    }

}


ReactDOM.render(<MyComponent/>, node);
