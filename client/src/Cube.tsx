import React, {useRef} from "react";
import {animated} from 'react-spring/three'


export function Cube({x, y, width, height, color, strokeColor, vert}) {
    const geom: any = useRef()
    return <animated.mesh
        position-x={x + width / 2}
        position-y={vert}
        position-z={y + height / 2}
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
