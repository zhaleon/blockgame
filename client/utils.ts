import {Component} from "react";
import {MapSchema} from "@colyseus/schema";

export function list<T>(length, func: (index) => T): T[] {
    let arr = []
    for (let i = 0; i < length; i++) arr.push(func(i))
    return arr
}

export function repeat(times, func: (index) => void) {
    for (let i = 0; i < times; i++) func(i)

}


export type Rec<T> = Record<string, T>

export class Comp<T = any> extends Component<T, any> {

}

export function map<K, R>(map: MapSchema<K>, func: (K, index: number) => R): R[] {
    let arr = Array()
    let index = 0
    for (let value of map.values()) arr.push(func(value, index++))
    return arr

}

export function toRadians(num: number) {
    return (num * Math.PI) / 180
}
