const util = require("util");
expect.extend({
    toHaveBlock: function (frame, x, y, width, height) {
        let subset = {x, y, width, height};
        return Object.values(frame.blocks).find(block => shallowSubset(block, subset)) ? {
            pass: true,
        } : {
            pass: false,
            message: () => `Could not find block ${util.inspect(subset)}`,
        };

    },
    toBeAt: function (entity, x, y) {
        const type = entity.name ? 'Player' : 'Block';
        return shallowSubset(entity, {x, y}) ? {
            pass: true,
        } : {
            pass: false,
            message: () => `${type} should be at (${x},${y}), not (${entity.x}, ${entity.y})`,
        };

    },
});

function shallowSubset(set, subset) {
    return !Object.entries(subset).find(([key, aValue]) => set[key] !== aValue)

}
