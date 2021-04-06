import {useEffect, useState} from "react";
import StatsImpl from "stats.js";
import {useFrame} from "react-three-fiber";

export function PerFrame({board, setBoard}) {
    const [stats] = useState(() => new StatsImpl())
    useEffect(() => {
        stats.showPanel(0)
        document.body.appendChild(stats.dom)
        return () => {
            document.body.removeChild(stats.dom);
        }
    }, [])
    return useFrame((state, delta) => {
        stats.begin()
        state.gl.render(state.scene, state.camera)
        stats.end()
    }, 1)
}
