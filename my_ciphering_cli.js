const fs = require("fs");
const helper = require("./modules/helper");
const path = require("path");
const TransformStream = require("./streams/TransformStream");
const WritableStream = require("./streams/WritableStream");
const stream = require("stream");
const util = require("util");
const {
  ConfigError,
  DuplicateFlagError,
  InputError,
  OutputError,
} = require("./modules/errors");

const data = helper.getData(process.argv);
const inputStream = data.has("-i")
  ? fs.createReadStream(path.resolve(__dirname, data.get("-i")), "utf8")
  : process.stdin;
const outputStream = data.has("-o")
  ? new WritableStream(path.resolve(__dirname, data.get("-o")))
  : process.stdout;
const transformStream = new TransformStream(data.get("-c"));
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

inputStream.on("error", () => {
  try {
    throw new InputError("You have problem in input file");
  } catch (err) {
    helper.error(`${err.name}: ${err.message}`);
  }
});

outputStream.on("error", (err) => {
  helper.error(`${err.name}: ${err.message}`);
});

pipeline(inputStream, transformStream, outputStream);
