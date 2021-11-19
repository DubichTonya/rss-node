module.exports.error = (text) => {
    process.stderr.write(text);
    process.exit(9);
}
