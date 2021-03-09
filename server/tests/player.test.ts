import {addPlayer, createFrame, frame, input} from "./helper";

beforeEach(() => {
    createFrame(5, 5)
    addPlayer("a", 0, 0)
    addPlayer("b", 4, 4)
})

test('single player movement', () => {
    input("a_down")
    input("a_down")
    input("a_right")
    expect(frame.players.a).toBeAt( 1 ,2);

});

test('multiple player movement', () => {
    input("a_down", "b_up")
    input("a_down", "b_up")
    input("a_right", "b_left")
    expect(frame.players.a).toBeAt(1, 2);
    expect(frame.players.b).toBeAt(3, 2);
});
test('player pushing idle player', () => {
    input("a_down", "b_left")
    for (let i = 0; i <= 3; i++) input("a_down")
    for (let i = 0; i <= 4; i++) input("a_right")

    expect(frame.players.a).toBeAt(3, 4);

    expect(frame.players.b).toBeAt(4, 4);
});
