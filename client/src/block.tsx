import {Spring} from "react-spring/renderprops";
import {animated} from "react-spring";
import {Comp} from "./utils";
import React = require("react");

export class Block extends Comp {
    render() {
        // const {x, y, width, height} = this.props;
        return <Spring to={this.props}>
            {spring => <animated.rect {...spring} strokeWidth={0.025} fill="#0074D9" stroke={"rgba(0,0,0,0.4)"}/>}
        </Spring>
    }
}
