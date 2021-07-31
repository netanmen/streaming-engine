const { Transform } = require('stream');
const chalk = require('chalk');

class FileSink extends Transform {
    constructor() {
        super({ objectMode: true });
    }

    _transform(data, _, callback) {
        console.log(chalk.green(data));

        callback(null, data);
    }
}

module.exports = () => new FileSink();