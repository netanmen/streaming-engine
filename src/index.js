const { pipeline, operators } = require('./operators/index')

pipeline(
    operators.filterOperator(input => input > 0),
    operators.fixedEventWindowOperator(2),
    operators.stdinSourceOperator,
)