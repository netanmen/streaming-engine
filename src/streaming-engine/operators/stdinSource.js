const { Readable } = require('stream')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

class StdinSource extends Readable {
    constructor() {
        super();
    }

    _read() {
        readline.question('>', input => {
            this.push(input);
        });
    }
}

module.exports = () => new StdinSource();