import {addBlock, addPlayer, createFrame, frame, input} from "./helper";

beforeEach(() => {
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 4, 4)
    addBlock(0, 3, 2, 1, 1)
})

test('pushing block', () => {
    input("a_down")
    input("a_down")
    input("a_right")
    input("a_right")
    input("a_right")
    expect(frame.players.a).toBeAt(3, 2);
    expect(frame).toHaveBlock(4, 2, 1, 1);
});
test('block pushed into wall', () => {
    input("a_down")
    input("a_down")
    input("a_right")
    input("a_right")
    input("a_right")
    input("a_right")
    input("a_right")
    expect(frame.players.a).toBeAt(3, 2);
    expect(frame).toHaveBlock(4, 2, 1, 1);
});

test('player pushing block pushing idle player', () => {
    input("a_down", "b_left")
    input("a_right_4")
    input("a_down")
    input("a_left")
    input("a_up")
    input("a_left")
    input("a_down_2")
    input("a_left")
    input("a_down")
    input("a_right")


    expect(frame.players.a).toBeAt(2, 4);
    expect(frame.blocks[0]).toBeAt(3, 4);
    expect(frame.players.b).toBeAt(4, 4);

});

