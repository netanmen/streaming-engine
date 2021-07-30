const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');

const getOperators = () => {
    const operatorsDirName = `${__dirname}/operators`;
    const operators = {};
    
    fs
        .readdirSync(operatorsDirName)
        .forEach(filename => {
            const operatorKey = filename.slice(0, -3);
            const operator = require(path.join(operatorsDirName, filename));

            operators[operatorKey] = operator;
        });

    return operators;
};

const inputPipeline = (...operators) => pipeline(
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
    operators: getOperators()
};