const { Transform } = require('stream')

const stdinSourceOperator = new Transform({
    transform: (data, encoding, callback) => {
        const output = `>${data}`;
        process.stdout.write(output)
        
        callback(null, data);
    }
});

module.exports = stdinSourceOperator;