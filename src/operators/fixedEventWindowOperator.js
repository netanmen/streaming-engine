const { Transform } = require('stream')

const fixedEventWindowOperator = size => new Transform({
    objectMode: true,
    transform: (data, encoding, callback) => {
        if (!this.fixedSizeArray) {
            this.fixedSizeArray = [];
        }

        this.fixedSizeArray.push(+data);

        if (this.fixedSizeArray.length === size) {
            callback(null, this.fixedSizeArray);
            this.fixedSizeArray = [];
            return;
        }

        callback();
    }
});

module.exports = fixedEventWindowOperator;