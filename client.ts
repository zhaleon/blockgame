import {Client} from "colyseus.js"

async function main() {
    const client = new Client("localhost:2456");
    const room = await client.create("tutorial", {username: "greenpizza12"})
    room.onStateChange(state => console.log(state))
}

main()
