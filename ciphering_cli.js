const helper = require("./modules/helper");
const path = require("path");
const WritableStream = require("./streams/WritableStream");
const stream = require("stream");
const util = require("util");
const {
  ConfigError,
  DuplicateFlagError,
} = require("./modules/errors");
const ReadStream = require('./streams/ReadableStream');
const transformFunction = require('./streams/TransformStream');

const data = helper.getData(process.argv);
const inputStream = data.has("-i")
  ? new ReadStream(path.resolve(__dirname, data.get("-i")), "utf8")
  : process.stdin;
const outputStream = data.has("-o")
  ? new WritableStream(path.resolve(__dirname, data.get("-o")))
  : process.stdout;
const transformStream = transformFunction(data.get("-c"));
const pipeline = util.promisify(stream.pipeline);

try {
  if (!data.get("-c") || !helper.validateConfig(data.get("-c"))) {
    throw new ConfigError("You have problem with config");
  }

  if (!helper.validateFlags(process.argv.slice(2))) {
    throw new DuplicateFlagError("Flags should not be repeated");
  }
} catch (err) {
  helper.error(`${err.name}: ${err.message}`);
}

pipeline(
    inputStream,
    ...transformStream,
    outputStream
).catch(err => {
  helper.error(`${err.name}: ${err.message}`);
})
