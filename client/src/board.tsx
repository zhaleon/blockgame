import React, {Component} from "react";
import {Border} from "./border";
import {Player} from "./player";
import {Block} from "./block";
import {Rec} from "./utils";

export class Board extends Component<{ frame: { blocks: Rec<{ id: string, x: number, y: number, w: number, h: number }>, width, height, players } }> {


    render() {
        const {blocks, players, width, height} = this.props.frame;
        return <svg viewBox={`-1 -1 ${width + 2} ${height + 2}`}>
            <Border width={width} height={height}/>

            {Object.values(blocks).map(({id, ...props}) => {
                return <Block key={id} {...props}/>;
            })}
            {Object.values(players).map((element: any) => <Player key={element.name} data={element}/>)}
        </svg>;
    }

}
