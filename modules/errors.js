class CustomError extends Error {
  constructor(message, status = "status unknown") {
    super(message);
    this.name = "Custom Error";
    this.status = status;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    } else {
      this.stack = new Error().stack;
    }
  }
}

class ConfigError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "ConfigError";
  }
}

class InputError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "InputError";
  }
}

class OutputError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "OutputError";
  }
}

class DuplicateFlagError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "DuplicateFlagError";
  }
}

module.exports = {
  ConfigError,
  OutputError,
  InputError,
  DuplicateFlagError,
};
