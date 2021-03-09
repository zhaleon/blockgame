import {addBlock, addPlayer, createFrame, frame, input} from "./helper";

beforeEach(() => {
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 0, 4)
    addBlock(0, 2, 1, 1, 1)
})

test('players pushing into each other', () => {
    input("a_right", "b_left")
    input("a_right")
    input("a_right", "b_left")
    expect(frame.players.a).toBeAt(2, 0);
    expect(frame.players.b).toBeAt(3, 0);

});
test('players pushing into same empty spot', () => {
    input("a_right", "b_left")
    input("a_right", "b_left")
    input("a_right", "b_left")
    expect(frame.players.a).toBeAt(1, 0);
    expect(frame.players.b).toBeAt(3, 0);

});

test('players pushing same block', () => {
    input("a_down", "b_left")
    input("a_right", "b_left")
    input("a_right", "b_left")
    expect(frame.players.a).toBeAt(1, 0);
    expect(frame.players.b).toBeAt(3, 0);

});
