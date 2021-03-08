//test.ts
import {step} from "./main"

import {strict} from "assert";

let frame = {
    width: 5,
    height: 5,
    players: {
        a: {x: 0, y: 0},
    },
    blocks: [
        {x: 2, y: 2, w: 1, h: 1}
    ]
};


const inputs =
    [
        [{player: "a", action: "down"}],
        [{player: "a", action: "down"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
    ]

inputs.forEach(input => frame = step(frame, input))

console.log(frame.players.a.x == 3)
console.log(frame.blocks[0].x == 4)
