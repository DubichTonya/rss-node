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
    this.status = "404";
  }
}

class InputError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "InputError";
    this.status = "404";
  }
}

class OutputError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "OutputError";
    this.status = "404";
  }
}

class DuplicateFlagError extends CustomError {
  constructor(message, status) {
    super(message, status);
    this.name = "DuplicateFlagError";
    this.status = "404";
  }
}

module.exports = {
  ConfigError,
  OutputError,
  InputError,
  DuplicateFlagError,
};
