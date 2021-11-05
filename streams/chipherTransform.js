const stream = require("stream");
const chipher = require("../modules/chipher");

class TransformStream extends stream.Transform {
  constructor(configArray) {
    super();
    this.configArray = configArray;
  }

  _transform(chunk, encoding, callback) {
    this.push(transformFunction(this.configArray, chunk));
    callback();
  }
}

function transformFunction(configArray, chunk) {
  chunk = chunk.toString();
  configArray.forEach((item) => {
    switch (item) {
      case "C0":
        chunk = chipher.caesar(chunk, 0);
        break;
      case "C1":
        chunk = chipher.caesar(chunk);
        break;
      case "R0":
        chunk = chipher.rot8(chunk, 0);
        break;
      case "R1":
        chunk = chipher.rot8(chunk, 1);
        break;
      case "A":
        chunk = chipher.atbash(chunk);
        break;
      default:
        chunk = chunk;
        break;
    }
  });
  return chunk;
}

module.exports = TransformStream;
