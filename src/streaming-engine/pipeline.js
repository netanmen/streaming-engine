const { pipeline } = require('stream');
const chalk = require('chalk');

const handleError = err => console.warn(chalk.red(`Pipeline failed: ${err}`));
const handleSuccess = () => console.log(chalk.green('Pipeline completed.'));

const defaultPipeline = (...operators) => pipeline(
    ...operators,
    err => err ? handleError(err) : handleSuccess(),
);

module.exports = defaultPipeline;