import {addBlock, addPlayer, createFrame, frame, input} from "./tests/helper";

createFrame(5, 5)
addPlayer("a", 0, 0)
addBlock(0, 2, 2, 1, 1)
input("a_down")
input("a_down")
input("a_right")
input("a_right")
input("a_right")
console.log(frame)
input("a_down")
for (let i = 0; i <= 2; i++) input("a_down")
// for (let i = 0; i <= 3; i++) input("a_right")
console.log(frame.players.a.x == 3)
console.log(frame.players.a.y == 2)
console.log(frame.players.a)

