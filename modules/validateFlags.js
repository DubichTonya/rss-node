module.exports.validateFlags = (str) => {
  return str.split(" ").length === Array.from(new Set(str.split(" "))).length;
};
