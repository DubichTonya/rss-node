module.exports = {
  getData: function (arrArgs) {
    const regexp = /^\-[c|i|o]$/;
    const data = new Map();

    arrArgs.forEach((item, index) => {
      switch (item){
        case '--config':
          item = '-c';
          break;
        case '--input':
          item = '-i';
          break;
        case '--output':
          item = '-o';
          break;
        default:
          item = item;
          break;
      }

      if (
        item.match(regexp) &&
        arrArgs[index + 1] &&
        !arrArgs[index + 1].match(regexp)
      ) {
        item === "-c"
          ? data.set(item, arrArgs[index + 1].split("-"))
          : data.set(item, arrArgs[index + 1]);
      }
    });

    return data;
  },

  validateConfig: function (config) {
    const regexp = /^([C|R][0|1])|(A)$/;
    let count = 0;
    for (let i = 0; i < config.length; i++) {
      if (!config[i].match(regexp)) {
        count++;
        break;
      }
    }
    return !count;
  },

  validateFlags: function (args) {
    const flags = [...args].filter((item) => item.match(/^\-(c|i|o|\-input|\-output|\-config)$/));
    return flags.length === this.getData(args).size;
  }
};
