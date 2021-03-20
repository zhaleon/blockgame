import Board from "./board";

const board = new Board(5, 5);
const playerA = board.addPlayer("0", "a", 0, 0);
const playerB = board.addPlayer("1", "b", 4, 0);
console.assert(playerA.id === "0")
console.assert(playerB.id === "1")
const blockA = board.addBlock(3, 2, 1, 1)
const blockB = board.addBlock(4, 2, 1, 1)
console.log("line 10", blockA, blockB)
console.assert(blockA.id !== blockB.id)
playerA.input = [1, 0]
playerB.input = [-1, 0]
board.step(1)
