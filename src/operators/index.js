const { pipeline } = require('stream');
const stdinSourceOperator = require('./stdinSourceOperator');
const filterOperator = require('./filterOperator');
const fixedEventWindowOperator = require('./fixedEventWindowOperator');

const operators = {
    stdinSourceOperator,
    filterOperator,
    fixedEventWindowOperator,
};

const inputPipeline = (...operators) => pipeline(
    process.stdin,
    ...operators,
    err => {
        if (err) {
            console.log(`Pipeline failed: ${err}`)
        } else {
            console.log('Pipeline succeeded.')
        }
    }
);

module.exports = {
    pipeline: inputPipeline,
    operators
};