const stream = require("stream");
const cipher = require("../modules/cipher");

class TransformStreamCaesar extends stream.Transform {
  constructor(mode) {
    super();
    this.mode = mode;
  }

  _transform(chunk, encoding, callback) {
    this.push(cipher.caesar(chunk.toString().trim(), this.mode));
    callback();
  }
}

class TransformStreamROT8 extends stream.Transform {
  constructor(mode) {
    super();
    this.mode = mode;
  }

  _transform(chunk, encoding, callback) {
    this.push(cipher.rot8(chunk.toString().trim(), this.mode));
    callback();
  }
}

class TransformStreamAtbash extends stream.Transform {
  constructor(mode) {
    super();
    this.mode = mode;
  }

  _transform(chunk, encoding, callback) {
    this.push(cipher.atbash(chunk.toString().trim(), this.mode));
    callback();
  }
}

function transformFunction(configArray) {
  const transformArray = []
  configArray.forEach((item) => {
    switch (item) {
      case "C0":
        transformArray.push(new TransformStreamCaesar(0))
        break;
      case "C1":
        transformArray.push(new TransformStreamCaesar(1))
        break;
      case "R0":
        transformArray.push(new TransformStreamROT8(0))
        break;
      case "R1":
        transformArray.push(new TransformStreamROT8(1))
        break;
      case "A":
        transformArray.push(new TransformStreamAtbash())
        break;
      default:
        break;
    }
  });
  return transformArray;
}

module.exports = transformFunction;
