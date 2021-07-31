const { Readable } = require('stream')
const chalk = require('chalk');

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
        const readInput = () => readline.question(
            '>',
            answer => {
                if (!answer || !Number.isInteger(+answer)) {
                    console.warn(chalk.yellow('input must be a number!'));
                    readInput();

                    return;
                }

                this.push(answer);
            }
        );

        readInput();
    }
};

module.exports = () => new StdinSource();