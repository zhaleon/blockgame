import {addPlayer, createFrame, frame, input} from "./helper";

beforeEach(() => {
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 0, 4)
})

test('players pushing into each other', () => {
    input("a_right", "b_left")
    input("a_right")
    input("a_right", "b_left")
    expect(frame.players.a).toStrictEqual({x: 2, y: 0});
    expect(frame.players.b).toStrictEqual({x: 3, y: 0});

});
test('players pushing into same empty spot', () => {
    input("a_right", "b_left")
    input("a_right", "b_left")
    input("a_right", "b_left")
    expect(frame.players.a).toStrictEqual({x: 1, y: 0});
    expect(frame.players.b).toStrictEqual({x: 3, y: 0});

});
