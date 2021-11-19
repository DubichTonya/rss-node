const stream = require("stream");
const fs = require("fs");
const { OutputError } = require("../modules/errors");
const helper = require("../modules/helper");
const {error} = require('../modules/error');

class WritableStream extends stream.Writable {
  constructor(file) {
    super();
    this.file = file;
  }

  _write(chunk, encoding, callback) {
    try {
      fs.appendFileSync(this.file, chunk);
      callback();
    } catch (err) {
      err = new OutputError("You have problem in output file");
      error(`${err.name}: ${err.message}`);
    }
  }
}

module.exports = WritableStream;
