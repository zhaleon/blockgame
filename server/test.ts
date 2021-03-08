//test.ts
import {step} from "./main"

import {strict} from "assert";

let frame = {
    width: 5,
    height: 5,
    players: {
        a: {x: 0, y: 0},
        b: {x: 4, y: 4}
    },
    blocks: [
        {x: 2, y: 2, w: 1, h: 1}
    ]
}


const inputs =
    [
        [{player: "a", action: "down"}, {player: "b", action: "up"}],
        [{player: "a", action: "down"}, {player: "b", action: "up"}],
        [{player: "a", action: "right"}, {player: "b", action: "left"}],
        [{player: "a", action: "right"}, {player: "b", action: "left"}],
    ]


inputs.forEach(input => frame = step(frame, input))

strict(frame.players.a.x == 1)
strict(frame.players.a.y == 2)
strict(frame.players.b.x == 3)
strict(frame.players.b.y == 2)
