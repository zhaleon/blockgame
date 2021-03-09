import {addBlock, addPlayer, createFrame, frame, input} from "./tests/helper";

createFrame(5, 5)
addPlayer("a", 0, 0)
addPlayer("b", 4, 4)
addBlock(0, 3, 2, 1, 1)
input("a_down")
input("a_down")
input("a_right")
input("a_right")
input("a_right")
console.log(frame.blocks[0])
