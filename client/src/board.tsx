import {Svg, SVG} from "@svgdotjs/svg.js";
import {Component} from "react";
import {Block} from "./block";
import {Border} from "./border";
import React = require("react");

export class Board extends Component<{ width: number, height: number, data: [number, number, number, number][] }> {
    private svg: Svg;
    private background: JSX.Element[] = [];

    constructor(props) {
        super(props)
        const {width, height} = props
        this.svg = SVG().addTo(document.body).viewbox(-1, -1, width + 2, height + 2);
        this.createBackground(width, height);

    }

    render() {
        return <svg viewBox={`-1 -1 ${this.props.width + 2} ${this.props.height + 2}`}>
            <Border width={this.props.width} height={this.props.height}/>
            {this.props.data.map(element => <Block data={element}/>)}
        </svg>;
    }

    createBackground(width, height) {
        this.svg.rect(width + 2, height + 2).move(-1, -1).fill('#eee');
        this.svg.rect(width + 2, 1).move(-1, -1).fill('#333')
        this.svg.rect(1, height + 2).move(-1, -1).fill('#333')
        this.svg.rect(width + 2, 1).move(-1, height).fill('#333')
        this.svg.rect(1, height + 2).move(width, -1).fill('#333')
        for (let i = 1; i <= width; i++) {
            this.svg.line(-1, i, width + 1, i).stroke({color: "rgba(0,0,0,0.2)", width: 0.025})
        }
        for (let i = 1; i <= height; i++) {
            this.svg.line(i, -1, i, height + 1).stroke({color: "rgba(0,0,0,0.2)", width: 0.025})
        }
    }

    //
    // addBlock(x, y, width, height) {
    //     return this.svg.rect(width, height).move(x, y).fill("#0074D9").stroke({width: 0.025, color: "rgba(0,0,0,0.4)"})
    // }
}
