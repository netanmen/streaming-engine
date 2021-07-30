const { Transform } = require('stream')

class FoldSum extends Transform {
    constructor() {
        super({ objectMode: true });
    }

    _transform(data, _, callback) {
        const sum = data.reduce((sum, item) => sum + item, 0);

        callback(null, sum);
    }
}

module.exports = () => new FoldSum();