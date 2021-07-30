const { Readable } = require('stream')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

const stdinSource = () => new Readable({
    read() {
        readline.question('>', input => {
            this.push(input);
        });
    }
});

module.exports = stdinSource;