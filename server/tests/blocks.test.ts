import {addBlock, addPlayer, createFrame, getBlock, getPlayer, input} from "./helper";

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
    expect(getPlayer('a')).toBeAt(3, 2);
    expect(getBlock('0')).toBeAt(4, 2);
});
test('block pushed into wall', () => {
    input("a_down")
    input("a_down")
    input("a_right")
    input("a_right")
    input("a_right")
    input("a_right")
    input("a_right")
    expect(getPlayer('a')).toBeAt(3, 2);
    expect(getBlock('0')).toBeAt(3, 2);
});
//
test('player pushing block pushing idle player', () => {
    input("a_down")
    input("b_left")
    input("a_right", 4)
    input("a_down")
    input("a_left")
    input("a_up")
    input("a_left")
    input("a_down", 2)
    input("a_left")
    input("a_down")
    input("a_right")

    expect(getPlayer('a')).toBeAt(2, 4);
    expect(getBlock('0')).toBeAt(3, 4);
    expect(getPlayer('b')).toBeAt(4, 4);

});

