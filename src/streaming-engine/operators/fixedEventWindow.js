const { Transform } = require('stream')

class FixedEventWindow extends Transform {
    constructor(size) {
        super({ objectMode: true });
        this.size = size;
        this.fixedSizeArray = [];
    }

    _transform(data, _, callback) {
        this.fixedSizeArray.push(+data);

        if (this.fixedSizeArray.length === this.size) {
            callback(null, this.fixedSizeArray);
            this.fixedSizeArray = [];

            return;
        }

        callback();
    }
}

module.exports = size => new FixedEventWindow(size);