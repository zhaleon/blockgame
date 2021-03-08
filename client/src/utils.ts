export function list<T>(length, func: (index) => T): T[] {
    let arr = []
    for (let i = 0; i < length; i++) arr.push(func(i))
    return arr
}