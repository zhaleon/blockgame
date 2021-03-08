import {simulate} from "./helper";

let frame = {
    width: 5,
    height: 5,
    players: {
        a: {x: 0, y: 0},
        b: {x: 4, y: 4},
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
    ]
const lastFrame = simulate(frame, inputs)
test('single player movement', () => {
    expect(lastFrame.players.a).toEqual({x: 1, y: 2});
});

test('multiple player movement', () => {
    expect(lastFrame.players.a).toStrictEqual({x: 1, y: 2});
    expect(lastFrame.players.b).toStrictEqual({x: 3, y: 2});
});
