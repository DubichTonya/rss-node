let {checkValidateFlags, checkValidateConfig, data} = require('../modules/validate');
const helper = require('../modules/helper');
const {DuplicateFlagError} = require('../modules/errors');

const dataMock = jest.mock('../modules/validate');
const helperMock = jest.mock('../modules/helper');

describe('Error scenarios', () => {
    test('User passes the same cli argument twice', () => {
        let config = ['-c','C1-C1-A-R0','-c','C0'];
        expect(() => checkValidateFlags(config)).toThrowError('Error: You provided -c argument more than once')
    })

    test('User passes argument cli argument once', () => {
        let config = ['-c','C1-C1-A-R0'];
        expect(() => checkValidateFlags(config)).not.toThrowError('Error: You provided -c argument more than once')
    })

    test("User doesn't pass -c or --config argument", () => {
        dataMock.data = new Map([['-i','input.txt'], ['-o','output.txt']]);
        expect(() => checkValidateConfig(dataMock.data)).toThrowError('You have problem with config')
    })

    test("User passes incorrent symbols in argument for --config", () => {
        dataMock.data = new Map([['-i','input.txt'], ['-o','output.txt'], ['-c',['A2']]]);
        expect(() => checkValidateConfig(dataMock.data)).toThrowError('You have problem with config')
    })

    test("User passes correct sequence of symbols as argument for --config that matches regular expression", () => {
        dataMock.data = new Map([['-i','input.txt'], ['-o','output.txt'], ['-c',['A']]]);
        expect(() => checkValidateConfig(dataMock.data)).not.toThrowError('You have problem with config')
    })
})
