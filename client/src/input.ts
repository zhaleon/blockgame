import {reset} from "./boardUI";

let keys: any = {}
document.onkeydown = ({key}) => {
    keys[key] = true
    updateInputs()
}
document.onkeyup = ({key}) => {
    keys[key] = false
    updateInputs()
}
export let playerA = [0, 0]
export let playerB = [0, 0]

function updateInputs() {
    if (keys.r) reset()
    playerA[0] = keys.a ? -1 : keys.d ? 1 : 0;
    playerA[1] = keys.w ? -1 : keys.s ? 1 : 0;
    playerB[0] = keys.ArrowLeft ? -1 : keys.ArrowRight ? 1 : 0;
    playerB[1] = keys.ArrowUp ? -1 : keys.ArrowDown ? 1 : 0;
}
