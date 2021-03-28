// // import "../../client.ts"
// // import {BoardUI} from "./boardUI";
// import React from "react";
// // // import Stats from "stats.js"
// import ReactDOM from "react-dom";
// // import {Client} from "colyseus.js";

// //
// // (async function () {
// //     let client = new Client("ws://localhost:3000");
// //
// //     const room = await client.joinOrCreate("block", {username: "greenpizza12"});
// //     console.log("joined")
// //     room.onStateChange(state => console.log(state.x,state.bruh))
// //     room.send("input", [1, 0])
// //
// // })();
// import {BoardUI} from "./boardUI";
//
// document.body.style.margin = '0'
// let root = document.createElement('div');
// root.style.height = "100vmin"
// root.style.width = "100vmin"
// root.style.margin = "auto"
// document.body.appendChild(root)
//
//
// function App() {
//
//     return <BoardUI/>
//
// }
//
//
// ReactDOM.render(<App/>, root);
//

// module aliases

// let board;
//
// export function reset(): Board {
//     board = new Board(8, 8);
//     board.addPlayer("a", "c", 0, 0)
//     board.addPlayer("b", "d", 7, 7)
//     board.addBlock(1, 0, 3, 1)
//     board.addBlock(2, 1, 1, 2)
//     board.addBlock(5, 0, 1, 2)
//     board.addBlock(3, 3, 3, 3)
//     board.addBlock(0, 6, 1, 1)
//     board.addBlock(1, 7, 3, 1)
//     board.addBlock(7, 5, 1, 2)
//     board.addBlock(6, 2, 1, 1)
//     board.addBlock(7, 1, 1, 1)
//     board.addBlock(0, 2, 2, 2)
//     return board
// }
// reset()
// let initialState = {board: reset()};
import {Bodies, Body, Engine, Render, Vector, World} from "matter-js"
import {Rec} from "./utils";

// create an engine
var engine = Engine.create();

// create a renderer
var render = Render.create({
    element: document.body,
    engine
});
render.options.wireframes = false
engine.world.gravity.y = 0

// create two boxes and a ground
// var boxA = Bodies.rectangle(400, 200, 80, 80);
let coords: [number, number, number, number][] = [
    [1, 0, 3, 1],
    [2, 1, 1, 2],
    [5, 0, 1, 2],
    [3, 3, 3, 3],
    [0, 6, 1, 1],
    [1, 7, 3, 1],
    [7, 5, 1, 2],
    [6, 2, 1, 1],
    [7, 1, 1, 1],
    [0, 2, 2, 2]]
    .map(cords => cords.map(it => it * 50))
    .map(([x, y, w, h]) => [100 + x + (w / 2), 100 + y + (h / 2), w, h]);

let bodies = coords.map(args => Bodies.rectangle(...args, {
    render: {
        fillStyle: 'gray',
        strokeStyle: 'blue',
        lineWidth: 1
    }
}))


console.log(bodies)
const boxA = Bodies.rectangle(20, 20, 50, 50, {
    render: {
        fillStyle: 'red',
        strokeStyle: 'blue',
        lineWidth: 1
    }
});
for (const body of bodies) {
    Body.setInertia(body, Infinity)
    body.frictionAir = 1
    Body.setMass(body, 1)
}

bodies.push(boxA)

// var boxB = Bodies.rectangle(600, 340, 80, 80);
// Body.setInertia(boxB, Infinity)
// Body.setMass(boxB, Infinity)
// boxA.frictionAir = 1
// boxB.frictionAir = 1
// add all of the bodies to the world
World.add(engine.world, bodies);

// Engine.run(engine);

// Render.run(render);

let lastTime = 0
let pos = Vector.create(20, 20)
let lastInput = Vector.create()

function loop(ms) {
    requestAnimationFrame(loop)
    let delta = ms - lastTime;
    lastTime = ms;
    // Body.applyForce(boxA, boxA.position, lastInput)\
    Vector.add(pos, lastInput, pos)
    // console.log()
    let count = 0
    do {
        Body.setPosition(boxA, pos)
        Engine.update(engine, delta)
        count++
    } while (wrong() > 2)
    console.log(count)
    console.log(wrong())
    Render.world(render)
}

function wrong() {
    return Vector.magnitude(Vector.sub(pos, boxA.position))
}

function applyInput(input: Vector) {
    lastInput = Vector.mult(input, 4)
}

function gamepadInput() {
    // if (!navigator.getGamepads()[0]) return
    // let gamepad = navigator.getGamepads()[0];
    // let [x, y] = gamepad.axes;
    // let input = {x, y}
    // if (Vector.magnitude(input) < 0.05) return;
}


document.onkeydown = handleInput
document.onkeyup = handleInput
let keys: Rec<boolean> = {}

function handleInput({type, key}) {
    keys[key] = type == 'keydown'
    let x = 0
    let y = 0
    if (keys.w) y--
    if (keys.a) x--
    if (keys.s) y++
    if (keys.d) x++
    applyInput({x, y})
}

requestAnimationFrame(loop)
