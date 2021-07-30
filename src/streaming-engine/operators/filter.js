const { Transform } = require('stream')

class Filter extends Transform {
    constructor(predicate) {
        super();
        this.predicate = predicate;
    }

    _transform(data, _, callback) {
        if (!this.predicate(data)) {
            callback();
            return;
        }

        callback(null, data);
    }
}

module.exports = predicate => new Filter(predicate);