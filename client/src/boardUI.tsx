import React, {useState} from "react";
import {Canvas} from "react-three-fiber";
import {Cube} from "./Cube";
import {map} from "./utils";
import {PerFrame} from "./PerFrame";
import Board from "../../server/board";

let board;

export function reset(): Board {
    board = new Board(8, 8);
    board.addPlayer("a", "c", 0, 0)
    board.addPlayer("b", "d", 7, 7)
    board.addBlock(1, 0, 3, 1)
    board.addBlock(2, 1, 1, 2)
    board.addBlock(5, 0, 1, 2)
    board.addBlock(3, 3, 3, 3)
    board.addBlock(0, 6, 1, 1)
    board.addBlock(1, 7, 3, 1)
    board.addBlock(7, 5, 1, 2)
    board.addBlock(6, 2, 1, 1)
    board.addBlock(7, 1, 1, 1)
    board.addBlock(0, 2, 2, 2)
    return board
}


let initialState = {board: reset()};


export function BoardUI() {
    let [state, setState] = useState(initialState)

    const {blocks, players, width, height} = state.board;
    // return <svg viewBox={`-1 -1 ${width + 2} ${height + 2}`}>
    //     <Border width={width} height={height}/>
    //     {map(blocks, ({id, ...props}) => <Block key={id} {...props}/>)}
    //     {map(players, ({id, ...props}) => <Player key={id} {...props}/>)}
    // </svg>;
    return <Canvas camera={{position: [5, 10, 5], zoom: 70}} orthographic
                   onCreated={({camera}) => camera.lookAt(5, 0, 5)}>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        {map(players, ({id, ...props}) => <Cube color={"#ff0"} strokeColor={'#b77c00'} key={id} {...props}/>)}
        {map(blocks, ({id, ...props}) => <Cube color={'hotpink'} strokeColor={'red'} key={id} {...props}/>)}

        <gridHelper args={[width, height, 0x888888]} position={[width / 2, -0.5, height / 2]}/>
        <PerFrame board={state.board} setBoard={setState}/>

    </Canvas>

}



