const { Transform } = require('stream');

const fileSink = () => new Transform({
    objectMode: true,
    transform: (data, encoding, callback) => {
        console.log(data);

        callback(null, data);
    }
});

module.exports = fileSink;