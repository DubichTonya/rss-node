const helper = require("./modules/helper");
const path = require("path");
const WritableStream = require("./streams/WritableStream");
const stream = require("stream");
const util = require("util");
const ReadStream = require('./streams/ReadableStream');
const transformFunction = require('./streams/TransformStream');
const {error} = require('./modules/error');
const {checkValidateConfig, checkValidateFlags, data} = require('./modules/validate');

try {
  checkValidateConfig(data);
  checkValidateFlags(process.argv.slice(2));
} catch (err) {
  error(`${err.name}: ${err.message}`);
}

const inputStream = data.has("-i")
  ? new ReadStream(path.resolve(__dirname, data.get("-i")), "utf8")
  : process.stdin;
const outputStream = data.has("-o")
  ? new WritableStream(path.resolve(__dirname, data.get("-o")))
  : process.stdout;
const transformStream = transformFunction(data.get("-c"));
const pipeline = util.promisify(stream.pipeline);

pipeline(
    inputStream,
    ...transformStream,
    outputStream
).catch(err => {
  error(`${err.name}: ${err.message}`);
})
