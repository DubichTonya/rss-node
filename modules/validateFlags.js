module.exports.validateFlags = (args) => {
  return args.length === Array.from(new Set(args)).length;
};
