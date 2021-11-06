const stream = require("stream");
const cipher = require("../modules/cipher");

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
        chunk = cipher.caesar(chunk, 0);
        break;
      case "C1":
        chunk = cipher.caesar(chunk);
        break;
      case "R0":
        chunk = cipher.rot8(chunk, 0);
        break;
      case "R1":
        chunk = cipher.rot8(chunk, 1);
        break;
      case "A":
        chunk = cipher.atbash(chunk);
        break;
      default:
        chunk = chunk;
        break;
    }
  });
  return chunk;
}

module.exports = TransformStream;
