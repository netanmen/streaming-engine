const { Transform } = require('stream')

class Filter extends Transform {
    constructor(predicate) {
        super({ objectMode: true });
        this.predicate = predicate;
    }

    _transform(data, _, callback) {
        if (!this.predicate) {
            callback(new Error('Filter error: predicate is required'));
            return;
        }

        if (typeof this.predicate !== 'function') {
            callback(new Error('Filter error: predicate must be of function type'));
            return;
        }

        if (typeof this.predicate(data) !== 'boolean') {
            callback(new Error('Filter error: predicate must return a boolean'));
            return;
        }

        if (!data || !Number.isInteger(+data)) {
            callback(new Error('Filter error: input must be a number!'));
            return;
        }

        if (!this.predicate(data)) {
            callback();
            return;
        }

        callback(null, data);
    }
}

module.exports = predicate => new Filter(predicate);