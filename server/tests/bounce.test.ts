import {addBlock, addPlayer, createFrame, frame, input} from "./helper";

beforeEach(() => {
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 0, 4)
    addBlock(0, 2, 1, 1, 1)
    addBlock(0, 2, 3, 1, 1)
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
    expect(frame.players.a).toBeAt(1, 0);
    expect(frame.players.b).toBeAt(3, 0);

});
test('players pushing same block', () => {
    input("a_down", "b_down")
    input("a_right", "b_left")
    input("a_right", "b_left")
    expect(frame.players.a).toBeAt(1, 1);
    expect(frame.players.b).toBeAt(3, 1);
})

test('players pushing block into where another player is trying to move', () => {
    input("a_down", "b_down")
    input("a_right")
    input("a_right", "b_left")
    expect(frame.players.a).toBeAt(1, 1);
    expect(frame.blocks[0]).toBeAt(2, 1);
    expect(frame.players.b).toBeAt(4, 0);
});
test('players pushing blocks into same empty space', () => {
    input("a_right", "b_down")
    input("a_right", "b_down")
    input(2, "b_down")
    input(2, "b_left")
    input("a_down", "b_up")
    expect(frame.players.a).toBeAt(1, 1);
    expect(frame.blocks[0]).toBeAt(2, 1);
    expect(frame.players.b).toBeAt(4, 0);
});
