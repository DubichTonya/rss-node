const ciphers = require("../modules/cipher");
const { alphabet } = require("../modules/cipher");

let string;

beforeAll(() => {
  string = "Aa-Bb-Cc";
});

describe("atbash cipher", () => {
  test("encode", () => {
    expect(ciphers.atbash(string)).toBe("Zz-Yy-Xx");
  });
});

describe("caesar cipher", () => {
  test("encode", () => {
    expect(ciphers.caesar(string)).toBe("Bb-Cc-Dd");
  });

  test("decode", () => {
    expect(ciphers.caesar(string, 0)).toBe("Zz-Aa-Bb");
  });
});

describe("rot8 cipher", () => {
  test("encode", () => {
    expect(ciphers.rot8(string)).toBe("Ii-Jj-Kk");
  });

  test("decode", () => {
    expect(ciphers.rot8(string, 0)).toBe("Ss-Tt-Uu");
  });
});

describe("reverseAlphabet", () => {
  test("check output data", () => {
    ciphers.alphabet = 'AaBbCc';
    expect(ciphers.reverseAlphabet()).toEqual(["C", "c", "B", "b", "A", "a"]);
  });
});
