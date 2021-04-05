import React, {useState} from "react";
import {Canvas} from "react-three-fiber";
import {Cube} from "./Cube";
import {map} from "./utils";
import {PerFrame} from "./PerFrame";
import Board from "../../server/board";
import {useTrail} from "react-spring/three";
import {Camera} from "./camera";

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
    let [count, setCount] = useState(0)
    const {blocks, players, width, height} = state.board;
    let trail = useTrail(blocks.size + players.size, {vert: count < 3 ? 9 : 0})

    return <Canvas camera={{position: [5, 10, 5], zoom: 70}} orthographic
                   onCreated={({camera}) => camera.lookAt(5, 0, 5)} onClick={() => {
        setCount(count + 1);
    }}>

        <Camera perspective={count != 0 && count != 4}/>
        <ambientLight/>
        <pointLight position={[10, 10, 10]}/>
        {map(blocks, ({id, ...props}, index) => {
            return <Cube key={id} color={'hotpink'} strokeColor={'red'}
                         {...props} {...trail[index]} />;
        })}
        {map(players, ({id, ...props}, index) => {
            return <Cube key={id} color={"#ff0"} strokeColor={'#b77c00'}  {...props}
                         {...trail[index + blocks.size]}/>;
        })}
        <gridHelper args={[width, height, 0x888888]} position={[width / 2, -0.5, height / 2]}/>
        <PerFrame board={state.board} setBoard={setState}/>

    </Canvas>

}



