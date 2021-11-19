const helper = require("../modules/helper");

describe("validateConfig", () => {
  test("check with different value", () => {
    expect(helper.validateConfig(["C0"])).toEqual(true);
    expect(helper.validateConfig(["C0", "A", "R1"])).toEqual(true);
    expect(helper.validateConfig(["C2"])).toEqual(false);
    expect(helper.validateConfig(["C0", "A2", "R1"])).toEqual(false);
  });
});

describe("getData", () => {
  test("first test", () => {
    const args = [
      "-c",
      "C0",
      "--input",
      "input.txt",
      "-o",
      "output.txt",
      "-f",
      "fakeValue",
    ];
    const map = new Map();
    map.set("-c", ["C0"]);
    map.set("-i", "input.txt");
    map.set("-o", "output.txt");

    expect(helper.getData(args)).toEqual(map);
  });

  test("second test", () => {
    const argsSecond = [
      "--config",
      "C0-A-R1",
      "--input",
      "input.txt",
      "-o",
      "output.txt",
      "-f",
      "fakeValue",
    ];
    const mapSecond = new Map();
    mapSecond.set("-c", ["C0", "A", "R1"]);
    mapSecond.set("-i", "input.txt");
    mapSecond.set("-o", "output.txt");

    expect(helper.getData(argsSecond)).toEqual(mapSecond);
  });
});

// USE MOCK FUNCTION

describe("validateFlags", () => {
  test("must return false", () => {
    const args = ["-c", "C0", "-i", "input.txt", "-f", "fakeValue"];
    helper.getData = jest.fn(() => {
      const map = new Map();
      map.set("-c", ["C0"]);
      map.set("-i", "input.txt");
      map.set("-o", "output.txt");
      return map;
    });
    expect(helper.validateFlags(args)).toEqual(false);
  });

  test("must return true", () => {
    const args = [
      "-c",
      "C0",
      "-i",
      "input.txt",
      "-o",
      "output.txt",
      "-f",
      "fakeValue",
    ];
    helper.getData = jest.fn(() => {
      const map = new Map();
      map.set("-c", ["C0"]);
      map.set("-i", "input.txt");
      map.set("-o", "output.txt");
      return map;
    });
    expect(helper.validateFlags(args)).toEqual(true);
  });
});
