import {addBlock, addPlayer, createFrame, frame, input} from "./tests/helper";

createFrame(5, 5)
addPlayer("a", 0, 0)
addPlayer("b", 4, 4)
addBlock(2, 2, 1, 1)

input("a_down", "b_left")
for (let i = 0; i <= 3; i++) input("a_down")
for (let i = 0; i <= 4; i++) input("a_right")
console.log(frame.players.b.x == 3)
console.log(frame.players.b.y == 4)
console.log(frame.players.b.x == 4)
console.log(frame.players.b.y == 4)
