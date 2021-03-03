declare class SvgLine extends SVGItem {
    x1(x1: number): this

    x2(x2: number): this

    y1(y1: number): this

    y2(y2: number): this

}

declare class SvgRect extends SVGItem {

}

declare class SVGItem {
    add(type: 'line'): SvgLine
    add(type: 'rect'): SvgRect

    x(x: number): this


    y(y: number): this


    width(width: number): this

    height(height: number): this

    fill(color: string): this

    attachTo(item: HTMLElement): this

    stroke(color: string): this

    stroke_width(width: number): this
}

declare class SVGRootItem extends SVGItem {
    viewBox(x, y, width, height): this

}

declare function Svg(): SVGRootItem


declare module "@graphery/svg" {
    const SVGRootItem
    export default Svg
}
