declare global {
    namespace jest {
        interface Matchers<R> {
            toHaveBlock(x: number, y: number, w: number, h: number): CustomMatcherResult

            toBeAt(x: number, y: number): CustomMatcherResult
        }
    }
}
export {};
