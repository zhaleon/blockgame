import Board from "./board";

const board = new Board(8, 8);
let a = board.addPlayer("a", "c", 0, 0)
board.addPlayer("b", "d", 7, 7)
board.addBlock(1, 0, 3, 1)
board.addBlock(2, 1, 1, 2)
board.addBlock(5, 0, 1, 2)
board.addBlock(3, 3, 3, 3)
board.addBlock(0, 6, 1, 1)
board.addBlock(1, 7, 3, 1)
board.addBlock(7, 5, 1, 2)
board.addBlock(6, 2, 1, 1)
board.addBlock(7, 1, 1, 1)
board.addBlock(0, 2, 2, 2)
board.update("a", "down")
console.log(a.y)
