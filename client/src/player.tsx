import {animated} from 'react-spring'
import {Spring} from "react-spring/renderprops";
import React = require("react");

export function Player({name, ...data}) {
    return <Spring
        to={data}>
        {({x, y}) => <>
            <animated.circle
                cx={x + 0.5} cy={y + 0.5} r={0.4} fill="#0074D9"
                strokeWidth={0.025} stroke={"rgba(0,0,0,0.4)"}/>
            <animated.text x={x + 0.5} y={y + 0.5}
                           textAnchor={"middle"}
                           dominantBaseline={"middle"}
                           fontSize={0.4}>{name}</animated.text>
        </>
        }
    </Spring>


}
