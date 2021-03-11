import React, {Component} from "react";
import {Border} from "./border";
import {Player} from "./player";
import {Block} from "./block";

export class Board extends Component<{ frame: any }> {


    render() {
        const {blocks, players, width, height} = this.props.frame;
        return <svg viewBox={`-1 -1 ${width + 2} ${height + 2}`}>
            <Border width={width} height={height}/>
            {Object.values(blocks).map((element: any) => <Block key={element.id} data={element}/>)}
            {Object.values(players).map((element: any) => <Player key={element.name}    data={element}/>)}
        </svg>;
    }

}
