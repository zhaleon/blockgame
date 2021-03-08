import {step} from "../main";

export function simulate(inputFrame, inputs) {
    let frame = inputFrame;
    inputs.forEach(input => frame = step(frame, input))

    Object.values(frame.players).forEach((player:any) => {
        delete player.w;
        delete player.h;
    })
    return frame;
}
