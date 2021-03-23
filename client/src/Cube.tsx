import React, {useRef} from "react";

export function Cube({x, y, width = 1, height = 1, color, strokeColor}) {
    const geom: any = useRef()
    return (
        <mesh
            position={[x + width / 2, 0, y + height / 2]}>
            <boxBufferGeometry ref={geom} args={[width, 1, height]}/>
            <meshStandardMaterial color={color}/>
            <Edges geometry={geom} strokeColor={strokeColor}/>
        </mesh>
    )
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
