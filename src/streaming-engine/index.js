const fs = require('fs');
const path = require('path');
const pipeline = require('./pipeline');

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

module.exports = {
    pipeline,
    operators: getOperators()
};