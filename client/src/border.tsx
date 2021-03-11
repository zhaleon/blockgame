import React, {Component, createRef} from "react";
import {list} from "./utils";


export class Border extends Component<{ width: number, height: number, }> {
    ref: any = createRef()

    componentDidMount() {


    }

    render() {
        const {width, height} = this.props
        return (
            <>
                <rect x={-1} y={-1} width={width + 2} height={height + 2} fill={"#eee"}/>
                <rect x={-1} y={-1} width={width + 2} height={1} fill={"#333"}/>

                <rect x={-1} y={-1} width={1} height={height + 2} fill={"#333"}/>
                <rect x={-1} y={height} width={width + 2} height={1} fill={"#333"}/>

                <rect x={width} y={-1} width={1} height={height + 2} fill={"#333"}/>
                {
                    list(width + 1,
                        i => <line
                            key={i}
                            x1={i} x2={i}
                            y1={0} y2={height}
                            strokeWidth={0.025} stroke={"rgba(0,0,0,0.2"}/>)
                }
                {
                    list(height + 1,
                        i => <line
                            key={i}
                            x1={0} x2={height}
                            y1={i} y2={i}
                            strokeWidth={0.025} stroke={"rgba(0,0,0,0.2"}/>)
                }
            </>
        );
    }
}
