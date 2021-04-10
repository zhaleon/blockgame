import React from "react";
import ReactDOM from "react-dom";
import {createRoot} from "./dom";
import {BoardUI} from "./boardUI";
import {initColy} from "./coly";

const root = createRoot()

function App() {
    return <BoardUI/>
}

initColy().then(() => ReactDOM.render(<App/>, root));



