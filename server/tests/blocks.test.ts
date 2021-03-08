import {addBlock, addPlayer, createFrame, frame, input} from "./helper";

beforeEach(() => {
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 4, 4)
    addBlock(3, 2, 1, 1)
})

test('pushing block', () => {
    input("a_down")
    input("a_down")
    input("a_right")
    expect(frame.players.a).toStrictEqual({x: 1, y: 2});
    expect(frame.blocks).toContainEqual({x: 3, y: 2, w: 1, h: 1});
});
test('block pushed into wall', () => {
    input("a_down")
    input("a_down")
    input("a_right")
    input("a_right")
    input("a_right")
    expect(frame.players.a).toEqual({x: 3, y: 2});
    expect(frame.blocks).toContainEqual({x: 4, y: 2, w: 1, h: 1});
});

