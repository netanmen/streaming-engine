const { Transform } = require('stream')

class FoldMedian extends Transform {
    constructor() {
        super({ objectMode: true });
    }

    _transform(data, _, callback) {
        if (!data || !Array.isArray(data)) {
            callback(new Error('FoldMedian error: input must be of type array!'));
            return;
        }

        if (!data.length) {
            callback(new Error('FoldMedian error: input should not be an empty array'));
            return;
        }

        const sortedData = data.sort((a, b) => a - b);
        const isArrayLengthEven = sortedData.length % 2 === 0;
        const halfArrayLength = (sortedData.length - 1) / 2;

        const median = isArrayLengthEven
            ? (sortedData[Math.floor(halfArrayLength)] + sortedData[Math.ceil(halfArrayLength)]) / 2
            : sortedData[halfArrayLength];

        callback(null, median);
    }
}

module.exports = () => new FoldMedian();