module.exports.validateConfig = function (config) {
    let configValues = config.split('-');
    const regexp = /^([C|R]{1}[0|1]{1})|(A)$/;
    let count = 0;
    for (let i = 0; i < configValues.length; i++){
        if(!configValues[i].match(regexp)){
            count++;
            break;
        }
    }
    return !count;
}
