import {step} from "../main";

export function simulate(inputFrame, inputs) {
    let frame = inputFrame;
    inputs.forEach(input => frame = step(frame, input))
}
