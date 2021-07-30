const { Transform } = require('stream')

const stdinSource = new Transform({
    objectMode: true,
    transform: (data, encoding, callback) => {
        // TODO: read one int from stdin
        const output = `>${data}${Array.isArray(data) ? '\n' : ''}`;
        process.stdout.write(output);
        
        callback(null, data);
    }
});

module.exports = stdinSource;