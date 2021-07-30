const { Transform } = require('stream')

const filter = predicate => new Transform({
    transform: (data, encoding, callback) => {
        if (!predicate(data)) {
            callback();
            return;
        }

        callback(null, data);
    }
});

module.exports = filter;