const { pipeline } = require('stream');
const chalk = require('chalk');

const handleError = err => console.warn(chalk.red(`Pipeline failed: ${err}`));
const handleSuccess = () => console.log(chalk.green('Pipeline completed.'));

const defaultPipeline = (...operators) => {
    const firstOperatorClassName = operators[0].constructor.name;
    
    if (firstOperatorClassName !== 'StdinSource') {
        handleError(`pipeline must start with StdinSource, first operator is ${firstOperatorClassName}`);
        return;
    }
    
    return pipeline(
        ...operators,
        err => err ? handleError(err) : handleSuccess(),
    )
};

module.exports = defaultPipeline;