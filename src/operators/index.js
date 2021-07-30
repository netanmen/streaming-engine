const stdinSourceOperator = require('./stdinSourceOperator');
const filterOperator = require('./filterOperator');
const { pipeline } = require('stream')

module.exports = {
    pipeline,
    stdinSourceOperator,
    filterOperator,
}