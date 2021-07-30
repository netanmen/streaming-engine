const { Transform } = require('stream');

class FileSink extends Transform {
    constructor() {
        super({ objectMode: true });
    }

    _transform(data, _, callback) {
        console.log(data);

        callback(null, data);
    }
}

module.exports = () => new FileSink();