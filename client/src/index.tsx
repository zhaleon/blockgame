import "./style.css"
import {Board} from "./board";
import {Component, createRef} from "react";
import {frame} from "../../server/tests/helper";

const React = require('react');
const ReactDOM = require('react-dom');
let node = document.createElement('div');
document.body.appendChild(node)


class MyComponent extends Component {
    state = frame

    componentDidMount() {
        // setInterval(() => {
        //     input(...[playerALast, playerBLast].filter(item => item))
        //     playerALast = playerBLast = null;
        //     this.setState(frame)
        // }, 250)


    }

    render() {
        return <Board frame={this.state}/>
    }

}

export const compRef: any = createRef()

ReactDOM.render(<MyComponent ref={compRef}/>, node);
