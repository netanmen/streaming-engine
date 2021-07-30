const { pipeline, operators } = require('./streaming-engine');

pipeline(
    operators.stdinSource(),
    operators.filter(input => input > 0),
    operators.fixedEventWindow(2),
    operators.foldSum(),
    operators.fileSink(),
)