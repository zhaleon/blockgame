import {Spring} from "react-spring/renderprops";
import {animated} from "react-spring";
import React = require("react");

export function Block(props) {
    return <Spring to={props}>
        {data => <animated.rect {...data} strokeWidth={0.025} fill={"#0074D9"} stroke={"rgba(0,0,0,0.4)"}/>}
    </Spring>
}
