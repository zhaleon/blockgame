import React, {Component} from "react";
import {Block} from "./block";
import {Border} from "./border";

export class Board extends Component<{ frame: any }> {

    constructor(props) {
        super(props)
    }

    render() {
        const {blocks, players, width, height} = this.props.frame;
        return <svg viewBox={`-1 -1 ${this.props.frame.width + 2} ${this.props.frame.height + 2}`}>
            <Border width={this.props.frame.width} height={this.props.frame.height}/>
            {this.props.frame.blocks.map(element => <Block data={element}/>)}
        </svg>;
    }

}
