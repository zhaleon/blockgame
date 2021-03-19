import {Component} from "react";

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

export function map<T, K, R>(map: Map<T, K>, func: (K) => R): R[] {
    let arr = Array(map.size)

    for (let value of map.values()) arr.push(func(value))
    return arr

}
