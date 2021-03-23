import React from "react";
import Entity from "../../server/entity";
import {Canvas} from "react-three-fiber";
import {Cube} from "./Cube";
import {Stats} from "./stats"
import {map} from "./utils";


export function BoardUI({frame}: { frame: { blocks: Map<string, Entity>, width, height, players: Map<string, Entity> } }) {

    const {blocks, players, width, height} = frame;
    // return <svg viewBox={`-1 -1 ${width + 2} ${height + 2}`}>
    //     <Border width={width} height={height}/>
    //     {map(blocks, ({id, ...props}) => <Block key={id} {...props}/>)}
    //     {map(players, ({id, ...props}) => <Player key={id} {...props}/>)}
    // </svg>;
    return <Canvas camera={{position: [5, 10, 5], zoom: 60}} orthographic
                   onCreated={({camera}) => camera.lookAt(5, 0, 5)}>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        {map(blocks, ({id, ...props}) => <Cube color={'hotpink'} strokeColor={'red'} key={id} {...props}/>)}
        {map(players, ({id, ...props}) => <Cube color={'green'} strokeColor={'blue'} key={id} {...props}/>)}

        <gridHelper args={[width, height]} position={[width / 2, -0.5, height / 2]}/>
        <Stats/>

    </Canvas>

}


