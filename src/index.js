const { pipeline, operators } = require('./streaming-engine');

pipeline(
    operators.filter(input => input > 0),
    operators.fixedEventWindow(2),
    operators.foldSum(),
    operators.stdinSource(),
)