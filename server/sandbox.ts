const frame = new Frame(5, 5);
const playerA = frame.addPlayer("0", "a", 0, 0);
const playerB = frame.addPlayer("1", "b", 4, 0);
console.assert(playerA.id === "0")
console.assert(playerB.id === "1")
const blockA = frame.addBlock(3, 2, 1, 1)
const blockB = frame.addBlock(4, 2, 1, 1)
console.assert(blockA.id !== blockB.id)

frame.step([{player: "0", action: "right"}, {player: "1", action: "left"}])
