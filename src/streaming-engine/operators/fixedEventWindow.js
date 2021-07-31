const { Transform } = require('stream');

class FixedEventWindow extends Transform {
    constructor(size) {
        super({ objectMode: true });
        this.size = size;
        this.fixedSizeArray = [];
    }

    _transform(data, _, callback) {
        if (!data || !Number.isInteger(+data)) {
            callback(new Error('FixedEventWindow error: input must be a number!'));
            return;
        }

        if (this.size == 'undefind') {
            callback(new Error('FixedEventWindow error: size is required'));
            return;
        }

        if (!Number.isInteger(this.size)) {
            callback(new Error('FixedEventWindow error: size must be of type number'));
            return;
        }

        if (this.size <= 0) {
            callback(new Error('FixedEventWindow error: size must be a positive number'));
            return;
        }

        this.fixedSizeArray.push(+data);

        if (this.fixedSizeArray.length < this.size) {
            callback();
            return;
        }

        callback(null, this.fixedSizeArray);
        this.fixedSizeArray = [];
    }
}

module.exports = size => new FixedEventWindow(size);