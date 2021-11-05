const fs = require("fs");
const helper = require("./modules/helper");
const path = require("path");
const TransformStream = require("./streams/chipherTransform");
const stream = require("stream");
const util = require("util");

const data = helper.getData(process.argv);

if (!data.get("-c") || !helper.validateConfig(data.get("-c"))) {
  helper.error("You have problem with config");
}

if (!helper.validateFlags(process.argv.slice(2))) {
  helper.error("Flags should not be repeated");
}

const inputStream = data.has("-i")
  ? fs.createReadStream(path.resolve(__dirname, data.get("-i")), "utf8")
  : process.stdin;
const outputStream = data.has("-o")
  ? fs.createWriteStream(path.resolve(__dirname, data.get("-o")))
  : process.stdout;
const transformStream = new TransformStream(data.get("-c"));

const pipeline = util.promisify(stream.pipeline);

inputStream.on("error", () => {
  helper.error("You have problem in input file");
});

pipeline(inputStream, transformStream, outputStream);
