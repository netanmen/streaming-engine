const { Transform } = require('stream')

const foldSum = () => new Transform({
    objectMode: true,
    transform: (data, encoding, callback) => {
        const sum = data.reduce((sum, item) => sum + item, 0);

        callback(null, sum);
    }
});

module.exports = foldSum;