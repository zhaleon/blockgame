import React from "react";
import {Border} from "./border";
import {Player} from "./player";
import {Block} from "./block";
import {map} from "./utils";
import {entity} from "./index";

export function BoardUI({frame}: { frame: { blocks: Map<string, entity>, width, height, players: Map<string, entity> } }) {

    const {blocks, players, width, height} = frame;
    return <svg viewBox={`-1 -1 ${width + 2} ${height + 2}`}>
        <Border width={width} height={height}/>
        {map(blocks, ({id, ...props}) => <Block key={id} {...props}/>)}
        {map(players, ({id, ...props}) => <Player key={id} {...props}/>)}
    </svg>;

}
