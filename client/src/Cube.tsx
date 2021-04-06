import React, {useRef} from "react";
import {animated, useSpring} from 'react-spring/three'


export function Cube({x, y, width, height, color, strokeColor, vert}) {
    const geom: any = useRef()
    const position = useSpring({'position-x': x + width / 2, 'position-z': y + height / 2})
    return <animated.mesh
        {...position}
        position-y={0}
        scale={[width, 1, height]}>
        <animated.boxBufferGeometry ref={geom}/>
        <animated.meshStandardMaterial color={color}/>
        <Edges geometry={geom} strokeColor={strokeColor}/>
    </animated.mesh>
}

function Edges({geometry, strokeColor}) {
    if (geometry.current === undefined) return null;
    return (
        <lineSegments>
            <edgesGeometry attach="geometry" args={[geometry.current]}/>
            <lineBasicMaterial color={strokeColor} attach="material"/>
        </lineSegments>
    );
}
