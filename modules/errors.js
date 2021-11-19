class CustomError extends Error {
  constructor(message, status = "status unknown") {
    super(message);
    this.name = "CustomError";
    this.status = status;
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
  CustomError
};
