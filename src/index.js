const { pipeline, operators } = require('./streaming-engine');

const runExamplePipeline = () => pipeline(
    operators.stdinSource(),
    operators.filter(input => input > 0),
    operators.fixedEventWindow(3),
    operators.foldMedian(),
    operators.fixedEventWindow(2),
    operators.foldSum(),
    operators.fileSink(),
);

runExamplePipeline();