import {simulate} from "./helper";

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

test('pushing block', () => {

    const lastFrame = simulate(frame, [
        [{player: "a", action: "down"}],
        [{player: "a", action: "down"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
    ])
    expect(lastFrame.players.a).toEqual({x: 2, y: 2});
    expect(lastFrame.blocks).toContainEqual({x: 3, y: 2, w: 1, h: 1});
});


test('block pushed into wall', () => {
    const lastFrame = simulate(frame, [
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
        [{player: "a", action: "right"}],
    ])

    expect(lastFrame.players.a).toEqual({x: 3, y: 2});
    expect(lastFrame.blocks).toContainEqual({x: 4, y: 2, w: 1, h: 1});
});
