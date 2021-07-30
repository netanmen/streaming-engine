const {
    pipeline,
    stdinSourceOperator,
    filterOperator,
} = require('./operators/index')

pipeline(
    process.stdin,
    filterOperator(input => input > 0),
    stdinSourceOperator,
    // process.stdout,
    err => {
        if (err) {
            console.log(`Pipeline failed: ${err}`)
        } else {
            console.log('Pipeline succeeded.')
        }
    }
)