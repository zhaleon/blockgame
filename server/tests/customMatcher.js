const util = require("util");
expect.extend({
    toHaveBlock: function (frame, x, y, w, h) {
        let subset = {x, y, w, h};
        return Object.values(frame.blocks).find(block => shallowSubset(block, subset)) ? {
            pass: true,
        } : {
            pass: false,
            message: () => `Could not find block ${util.inspect(subset)}`,
        };

    },
    toBeAt: function (player, x, y) {
        return shallowSubset(player, {x, y}) ? {
            pass: true,
        } : {
            pass: false,
            message: () => `Player should be at (${x},${y}), not (${player.x}, ${player.y})`,
        };

    },
});

function shallowSubset(set, subset) {
    return !Object.entries(subset).find(([key, aValue]) => set[key] !== aValue)

}
