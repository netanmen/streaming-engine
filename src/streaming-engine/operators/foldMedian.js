const { Transform } = require('stream')

const foldMedian = () => new Transform({
    objectMode: true,
    transform: (data, encoding, callback) => {
        // TODO: cleanup
        const sortedData = data.sort((a, b) => a - b);
        const isArrayLengthEven = sortedData.length % 2 === 0;

        const median = isArrayLengthEven
        ? (sortedData[Math.floor((sortedData.length - 1) / 2)] + sortedData[Math.ceil((sortedData.length - 1) / 2)]) / 2
        : sortedData[(sortedData.length - 1) / 2];
        console.log("🚀 ~ file: foldMedian.js ~ line 11 ~ median", median)

        callback(null, median);
    }
});

module.exports = foldMedian;