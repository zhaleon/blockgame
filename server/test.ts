//test.ts
import {step} from "./main"

import assert from "assert";

let frame = {
    width: 5,
    height: 5,
    players: {
        a: {x: 0, y: 0}
    },
    blocks: [
        {x: 2, y: 2, w: 2, h: 2}
    ]
}

const inputs =
    [
        [{player: "a", action: "down"}],
        [{player: "a", action: "down"}],
        [{player: "a", action: "right"}],
    ]

inputs.forEach(input => frame = step(frame, input))
assert(frame.players.a.y = 2)
