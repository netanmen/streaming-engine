const { Transform } = require('stream')

class FoldSum extends Transform {
    constructor() {
        super({ objectMode: true });
    }

    _transform(data, _, callback) {
        if (!data || !Array.isArray(data)) {
            callback(new Error('FoldSum error: input must be of type array!'));
            return;
        }

        if (!data.length) {
            callback(new Error('FoldSum error: input should not be an empty array'));
            return;
        }

        const sum = data.reduce((sum, item) => sum + item, 0);

        callback(null, sum);
    }
}

module.exports = () => new FoldSum();