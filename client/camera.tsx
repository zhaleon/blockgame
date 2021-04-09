import React = require("react");
import {RefObject, useEffect, useRef} from "react";
import {Camera, useFrame, useThree} from "react-three-fiber";
import {animated, useSpring} from "react-spring/three";
import {toRadians} from "./utils";

// export function Camera(props) {
//     const ref: RefObject<Camera> = useRef<Camera>()
//     const {setDefaultCamera} = useThree()
//     useEffect(() => {
//         setDefaultCamera(ref.current);
//     }, [])
//     useEffect(() => {
//         ref.current.lookAt(4,0,5);
//     }, [lookAt])
//     return <perspectiveCamera position={[3, 6, 10]} fov={75} ref={ref}/>
// }

// export function Camera() {
//     const ref: RefObject<Camera> = useRef<Camera>()
//     const {setDefaultCamera} = useThree()
//     useEffect(() => {
//         setDefaultCamera(ref.current);
//     }, [])
//     let shift = 4;
//     useEffect(() => {
//         ref.current.lookAt(shift, 0, shift);
//     })
//     return <perspectiveCamera position={[shift, 8, shift]} fov={75} ref={ref}/>
// }

export function Camera({perspective}) {
    const ref: RefObject<Camera> = useRef<Camera>()
    const {setDefaultCamera} = useThree()
    useEffect(() => setDefaultCamera(ref.current), [])
    let shift = 4;
    // let fov = 1;
    let spring = useSpring({
        fov: perspective ? 75 : 1,
        position: perspective ? [4, 6, 10] : [shift, 6, shift],
    })

    useFrame(() => {
        ref.current.position.y = 12.5 / (2 * Math.tan(0.5 * toRadians(ref.current.fov)))
        ref.current.lookAt(shift, 0, shift-0.01);
        ref.current.updateProjectionMatrix();

    })
    return <animated.perspectiveCamera {...spring} ref={ref}/>
}

// export function Camera() {
//     const ref: RefObject<Camera> = useRef<Camera>()
//     const {setDefaultCamera} = useThree()
//     useEffect(() => {
//         setDefaultCamera(ref.current);
//     }, [])
//     let shift = 4;
//     useEffect(() => {
//         ref.current.lookAt(shift, 0, shift);
//     })
//     return <orthographicCamera position={[shift, 10, shift]} zoom={121} ref={ref}/>
// }
