import "./style.css"
import SVG from '@graphery/svg';

// const svg = document.createElement('svg');
// // document.body.appendChild(svg)
// svg.innerHTML =
//     `<svg xmlns="
// http://www.w3.org/2000/svg" width="320" height="200" viewBox="0 0 8 5">
//
//     <g class="discrete-physics">
// <rect x="0" y="0" width="8" height="5" class="background"></rect>
//
//     <rect x="0" y="0" width="8" height="1" class="wall"></rect>
//     <rect x="0" y="4" width="8" height="1" class="wall"></rect>
//     <rect x="0" y="0" width="1" height="5" class="wall"></rect>
//     <rect x="7" y="0" width="1" height="5" class="wall"></rect>
//
//     <line x1="0" y1="0" x2="8" y2="0" class="grid"></line>
//     <line x1="0" y1="1" x2="8" y2="1" class="grid"></line>
//     <line x1="0" y1="2" x2="8" y2="2" class="grid"></line>
//     <line x1="0" y1="3" x2="8" y2="3" class="grid"></line>
//     <line x1="0" y1="4" x2="8" y2="4" class="grid"></line>
//     <line x1="0" y1="5" x2="8" y2="5" class="grid"></line>
//     <line x1="0" y1="0" x2="0" y2="5" class="grid"></line>
//     <line x1="1" y1="0" x2="1" y2="5" class="grid"></line>
//     <line x1="2" y1="0" x2="2" y2="5" class="grid"></line>
//     <line x1="3" y1="0" x2="3" y2="5" class="grid"></line>
//     <line x1="4" y1="0" x2="4" y2="5" class="grid"></line>
//     <line x1="5" y1="0" x2="5" y2="5" class="grid"></line>
//     <line x1="6" y1="0" x2="6" y2="5" class="grid"></line>
//     <line x1="7" y1="0" x2="7" y2="5" class="grid"></line>
//     <line x1="8" y1="0" x2="8" y2="5" class="grid"></line>
//
//     <g class="move-right">
// <rect x="2" y="2" width="1" height="1" class="robot one"></rect>
//     <rect x="3" y="1" width="1" height="2" class="block one"></rect>
//     <rect x="4" y="2" width="1" height="1" class="block two"></rect>
//     <rect x="5" y="1" width="1" height="3" class="block three"></rect>
//     <use x="2" y="2" href="#force-right"></use>
//     </g>
//     </g>
//     </svg>`

class Board {
    private svg: SVGRootItem;

    constructor(width, height) {
        this.svg = SVG().viewBox(-1, -1, width + 2, height + 2);
        this.createBackground(width, height);
        this.svg.attachTo(document.body);

    }

    createBackground(width, height) {
        this.svg.add('rect').x(-1).y(-1).width(width + 2).height(height + 2).fill('#eee');
        this.svg.add('rect').x(-1).y(-1).width(width + 2).height(1).fill('#333')
        this.svg.add('rect').x(-1).y(-1).width(1).height(height + 2).fill('#333')
        this.svg.add('rect').x(-1).y(height).width(width + 2).height(1).fill('#333')
        this.svg.add('rect').x(width).y(-1).width(1).height(height + 2).fill('#333')
        for (let i = 0; i < width; i++) {
            this.svg.add('line').x1(-1).y1(i).x2(width + 1).y2(i).stroke_width(0.025).stroke("rgba(0,0,0,0.2)")
        }
        for (let i = 0; i < width; i++) {
            this.svg.add('line').x1(i).y1(-1).x2(i).y2(height + 1).stroke_width(0.025).stroke("rgba(0,0,0,0.2)")
        }
    }

    addBlock(x, y, width, height) {
        this.svg.add('rect').x(x).y(y).width(width).height(height).fill("#0074D9").stroke_width(0.025).stroke("rgba(0,0,0,0.4)")
    }
}

const board = new Board(8, 8)
board.addBlock(0, 2, 2, 2)
board.addBlock(1, 0, 3, 1)
board.addBlock(5, 0, 1, 2)
board.addBlock(2, 1, 1, 2)
board.addBlock(3, 3, 3, 3)
board.addBlock(7, 5, 1, 2)
board.addBlock(1, 7, 3, 1)
board.addBlock(0, 6, 1, 1)
board.addBlock(4, 6, 1, 1)
board.addBlock(6, 2, 1, 1)
board.addBlock(7, 1, 1, 1)

