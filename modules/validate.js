let helper = require('./helper');
const {ConfigError, DuplicateFlagError} = require('./errors');

let data = helper.getData(process.argv);

function checkValidateConfig(data){
    if (!data.get("-c") || !helper.validateConfig(data.get("-c"))) {
        throw new ConfigError("You have problem with config");
    }
}

function checkValidateFlags(conf) {
    if (!helper.validateFlags(conf)) {
        throw new DuplicateFlagError("Error: You provided -c argument more than once");
    }
}

module.exports = { checkValidateFlags, checkValidateConfig, data };
