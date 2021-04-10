import React = require("react");
import {playerFill} from "../colors";

export function Player({username, x, y}) {
    // return <Spring
    //     to={data}>
    //     {({x, y}) =>
    return <>
        <rect
            x={x} y={y} width={1} height={1} r={0.4} fill={playerFill}
            strokeWidth={0.025} stroke={"rgba(0,0,0,0.4)"}/>
        <text x={x + 0.5} y={y + 0.5}
              textAnchor={"middle"}
              dominantBaseline={"middle"}
              fontSize={0.4}>{username}</text>
    </>
}

// </Spring>


