const { Transform } = require('stream');

const fileSink = () => new Transform({
    objectMode: true,
    transform: (data, encoding, callback) => {
        const output = `>${data}${Array.isArray(data) ? '\n' : ''}`;
        process.stdout.write(output);
        
        callback(null, data);
    }
});

module.exports = fileSink;