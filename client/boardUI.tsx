import React, {useEffect, useState} from "react";
import Board from "../server/board";
import {onStateChange, sendInput} from "./coly";
import {Player} from "./sprites/player";
import {map, Rec} from "./utils";
import {Border} from "./sprites/border";
import {Block} from "./sprites/block";

export function BoardUI() {
    let [state, setState] = useState<Board>(null)
    useEffect(() => onStateChange(setState), [])
    useEffect(() => {
        document.onkeydown = handleInput
        document.onkeyup = handleInput
        let keys: Rec<boolean> = {}

        function handleInput({type, key}) {
            keys[key] = type == 'keydown'
            let aDir;
            if (keys.w) aDir = "up";
            else if (keys.a) aDir = "left";
            else if (keys.s) aDir = "down";
            else if (keys.d) aDir = "right";
            if (aDir) sendInput(aDir)
        }
    })
    if (!state) return null;
    const {blocks, players, width, height} = state;
    return <svg viewBox={`-1 -1 ${width + 2} ${height + 2}`}>
        <Border width={width} height={height}/>
        {map(blocks, ({id, ...props}) => <Block key={id} {...props}/>)}
        {map(players, ({id, ...props}) => <Player key={id} {...props}/>)}
    </svg>;

}



