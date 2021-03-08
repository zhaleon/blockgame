import {Component} from "react";
import React = require("react");

export class Block extends Component<{ data: [number, number, number, number] }> {
    render() {
        const [x, y, w, h] = this.props.data;
        return <rect x={x} y={y} width={w} height={h} strokeWidth={0.025} fill={"#0074D9"} stroke={"rgba(0,0,0,0.4)"}/>
    }
}
