import React, {Component, createRef} from "react";
import {list} from "./utils";
import anime from "animejs";
import {compRef} from "./index";
import {addBlock, addPlayer, createFrame, frame, input} from "../../server/tests/helper";

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


export class Border extends Component<{ width: number, height: number, }> {
    ref: any = createRef()

    componentDidMount() {
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
        const {width, height} = this.props
        const offset = 0.2;
        return (
            <>
                <rect x={-1} y={-1} width={width + 2} height={height + 2} fill={"#eee"}/>
                <rect id={"timer"} x={-1} y={-1} width={width + 2} height={offset} fill={"#e00"}/>
                <rect x={-1} y={-1 + offset} width={width + 2} height={1 - offset} fill={"#333"}/>

                <rect x={-1} y={-1} width={1} height={height + 2} fill={"#333"}/>
                <rect x={-1} y={height} width={width + 2} height={1} fill={"#333"}/>

                <rect x={width} y={-1} width={1} height={height + 2} fill={"#333"}/>
                {
                    list(width + 1,
                        i => <line
                            key={i}
                            x1={i} x2={i}
                            y1={0} y2={height}
                            strokeWidth={0.025} stroke={"rgba(0,0,0,0.2"}/>)
                }
                {
                    list(height + 1,
                        i => <line
                            key={i}
                            x1={0} x2={height}
                            y1={i} y2={i}
                            strokeWidth={0.025} stroke={"rgba(0,0,0,0.2"}/>)
                }
            </>
        );
    }
}
