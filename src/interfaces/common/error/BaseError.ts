class BaseError extends Error {
  name = '';

  statusCode: number;

  errorCode: string;

  traceCode: number;

  message: string;

  constructor(statusCode: number, errorCode: string, message = '') {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.traceCode = Date.now();
    this.message = message;
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
  }

  toJson = () => {
    return {
      name: this.name,
      statusCode: this.statusCode,
      errorCode: this.errorCode,
      traceCode: this.traceCode,
      message: this.message,
    };
  };
}

export default BaseError;
