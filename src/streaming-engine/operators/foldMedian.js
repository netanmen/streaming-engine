const { Transform } = require('stream')

class FoldMedian extends Transform {
    constructor() {
        super({ objectMode: true });
    }

    _transform(data, _, callback) {
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