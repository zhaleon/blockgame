import React = require("react");

export function Player({username, x, y}) {
    // return <Spring
    //     to={data}>
    //     {({x, y}) =>
    return <>
        <circle
            cx={x + 0.5} cy={y + 0.5} r={0.4} fill="#0074D9"
            strokeWidth={0.025} stroke={"rgba(0,0,0,0.4)"}/>
        <text x={x + 0.5} y={y + 0.5}
              textAnchor={"middle"}
              dominantBaseline={"middle"}
              fontSize={0.4}>{username}</text>
        // </>
}

// </Spring>


