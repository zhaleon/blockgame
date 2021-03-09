import React, {Component} from "react";
import {Block} from "./block";
import {Border} from "./border";
import {Player} from "./player";

export class Board extends Component<{ frame: any }> {

    constructor(props) {
        super(props)
    }

    render() {
        const {blocks, players, width, height} = this.props.frame;
        return <svg viewBox={`-1 -1 ${this.props.frame.width + 2} ${this.props.frame.height + 2}`}>
            <Border width={this.props.frame.width} height={this.props.frame.height}/>
            {Object.values(blocks).map((element: any) => <Block key={element.id} data={element}/>)}
            {Object.values(players).map((element: any) => <Player key={element.name}    data={element}/>)}
        </svg>;
    }

}
