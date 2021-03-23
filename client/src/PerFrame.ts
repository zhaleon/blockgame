import {useEffect, useState} from "react";
import StatsImpl from "stats.js";
import {useFrame} from "react-three-fiber";
import {playerA, playerB} from "./input";

export function PerFrame({board, setBoard}) {
    const [stats] = useState(() => new StatsImpl())
    useEffect(() => {
        stats.showPanel(0)
        document.body.appendChild(stats.dom)
        return () => {
            document.body.removeChild(stats.dom);
        }
    }, [])
    return useFrame(state => {
        stats.begin()
        state.gl.render(state.scene, state.camera)
        board.update(1)
        board.players.get("a").input = playerA
        board.players.get("b").input = playerB
        setBoard({board})
        stats.end()
    }, 1)
}
