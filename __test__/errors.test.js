const {
  ConfigError,
  DuplicateFlagError,
  InputError,
  OutputError,
  CustomError
} = require("../modules/errors");

describe("CustomError", () => {
  const error = new CustomError("CustomError message");

  test("check instance of Error", () => {
    expect(error instanceof Error).toEqual(true);
  });

  test("check name", () => {
    expect(error.name).toBe("CustomError");
  });

  test("check message", () => {
    expect(error.message).toBe("CustomError message");
  });
});

describe("ConfigError", () => {
  const error = new ConfigError("ConfigError message");

  test("check instance of Error", () => {
    expect(error instanceof Error).toEqual(true);
  });

  test("check name", () => {
    expect(error.name).toBe("ConfigError");
  });

  test("check message", () => {
    expect(error.message).toBe("ConfigError message");
  });
});

describe("DuplicateFlagError", () => {
  const error = new DuplicateFlagError("DuplicateFlagError message");

  test("check instance of Error", () => {
    expect(error instanceof Error).toEqual(true);
  });

  test("check name", () => {
    expect(error.name).toBe("DuplicateFlagError");
  });

  test("check message", () => {
    expect(error.message).toBe("DuplicateFlagError message");
  });
});

describe("InputError", () => {
  const error = new InputError("InputError message");
  test("check instance of Error", () => {
    expect(error instanceof Error).toEqual(true);
  });

  test("check name", () => {
    expect(error.name).toBe("InputError");
  });

  test("check message", () => {
    expect(error.message).toBe("InputError message");
  });
});

describe("InputError", () => {
  const error = new OutputError("OutputError message");
  test("check instance of Error", () => {
    expect(error instanceof Error).toEqual(true);
  });

  test("check name", () => {
    expect(error.name).toBe("OutputError");
  });

  test("check message", () => {
    expect(error.message).toBe("OutputError message");
  });
});
