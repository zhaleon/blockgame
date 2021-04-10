import React from "react";
import {list} from "../utils";
import {background, border, gridStroke} from "../colors";
export function Border({width, height}) {
    // const {width, height} = this.props
    return (
        <>
            <rect x={-1} y={-1} width={width + 2} height={height + 2} fill={background}/>
            <rect x={-1} y={-1} width={width + 2} height={1} fill={border}/>

            <rect x={-1} y={-1} width={1} height={height + 2} fill={border}/>
            <rect x={-1} y={height} width={width + 2} height={1} fill={border}/>

            <rect x={width} y={-1} width={1} height={height + 2} fill={border}/>
            {
                list(width + 1,
                    i => <line
                        key={i}
                        x1={i} x2={i}
                        y1={0} y2={height}
                        {...gridStroke}/>)
            }
            {
                list(height + 1,
                    i => <line
                        key={i}
                        x1={0} x2={height}
                        y1={i} y2={i}
                        {...gridStroke}/>)
            }
        </>
    );
}
