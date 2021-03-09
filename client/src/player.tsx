import {Component} from "react";
import React = require("react");

export class Player extends Component<{ data: any }> {
    render() {
        const {x, y, name} = this.props.data;
        return <>
            <circle cx={x + 0.5} cy={y + 0.5} r={0.4}
                    fill={"#0074D9"} strokeWidth={0.025} stroke={"rgba(0,0,0,0.4)"}>a
            </circle>
            <text x={x+0.5} y={y + 0.5} textAnchor={"middle"} dominantBaseline={"middle"} fontSize={0.4}> {name}</text>
        </>

    }
}
