import {step} from "../main";

let frame = {
    width: 5,
    height: 5,
    players: {
        a: {x: 0, y: 0},
    },
    blocks: [
        {x: 2, y: 2, w: 1, h: 1}
    ]
}
const inputs =
    [
        [{player: "a", action: "down"}],
        [{player: "a", action: "down"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
    ]

test('player movement', () => {
    expect().toBe(3);
});
