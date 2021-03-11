import {Component} from "react";
import {animated} from 'react-spring'
import {Spring} from "react-spring/renderprops";
import React = require("react");

export class Player extends Component<{ data: any }> {
    render() {
        let {x, y, name} = this.props.data;
        x += 0.5;
        y += 0.5;
        return <>
            <Spring
                to={{x, y}}>
                {({x, y}) => <>
                    <animated.circle
                        cx={x} cy={y} r={0.4} fill="#0074D9"
                        strokeWidth={0.025} stroke={"rgba(0,0,0,0.4)"}/>
                    <animated.text x={x} y={y} textAnchor={"middle"} dominantBaseline={"middle"}
                                   fontSize={0.4}>{name}</animated.text>
                </>
                }
            </Spring>

        </>

    }
}
