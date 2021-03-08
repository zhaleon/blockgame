//test.ts
import {step} from "./main"

import assert from "assert";

const frame = {
    width: 5,
    height: 5,
    players: [
        {name: "a", x: 0, y: 0}
    ],
    blocks: [
        {x: 2, y: 2, width: 2, height: 2}
    ]
}

const inputs =
    [
        [{player: "a", action: "down"}],
        [{player: "a", action: "down"}],
        [{player: "a", action: "right"}],
    ]

const newFrame = step(frame, inputs)
assert(newFrame.players.a.y = 1)
