import {addPlayer, createFrame, frame, input} from "./tests/helper";

createFrame(5, 5)
addPlayer("a", 0, 0)
addPlayer("b", 4, 4)
input("a_down", "b_right")
for (let i = 0; i <= 3; i++) input("a_down")
for (let i = 0; i <= 4; i++) input("a_right")
console.log(frame.players.a.x == 3)
console.log(frame.blocks[0].x == 4)
