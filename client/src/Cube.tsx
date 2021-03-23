import React, {useRef} from "react";
import {animated, useSpring} from 'react-spring/three'

export function Cube({x, y, width = 1, height = 1, color, strokeColor}) {
    const geom: any = useRef()
    const props = useSpring({
        'position-x': x + width / 2,
        'position-z': y + height / 2,
        from: {'position-x': 0, 'position-z': 0}
    })
    return <animated.mesh
        {...props}
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
