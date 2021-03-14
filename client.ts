import Colyseus from "colyseus.js";

async function main() {
    let client = new Colyseus.Client("ws://localhost:3000");


    const room = await client.joinOrCreate("block", {username: "greenpizza12"});
    room.onStateChange(state => console.log(state))
    room.send("input", {x: 1, y: 0})

}


const stateChange = state => {
    console.log(state)
};

main()


