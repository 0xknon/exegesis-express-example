/* eslint-disable */
import { ErrorCode } from 'src/interfaces/common';
import BaseError from './BaseError';

class DatabaseError extends BaseError {
  constructor(errorCode: ErrorCode, message?: string) {
    super(400, errorCode, message);
  }
}

class UnknownServerError extends BaseError {
  constructor(message: string) {
    super(500, 'UNKNOWN_SERVER_ERROR', message);
  }
}

class BadRequestError extends BaseError {
  constructor(errorCode: ErrorCode) {
    super(400, errorCode);
  }
}

class UnauthorizedError extends BaseError {
  constructor(errorCode: string, message?: string) {
    super(401, errorCode, message);
  }
}

class MethodNotAllowedError extends BaseError {
  constructor(message: string) {
    super(405, 'METHOD_NOT_ALLOWED', message);
  }
}

class ResourceNotFoundError extends BaseError {
  constructor(errorCode = 'RESOURCE_NOT_FOUND') {
    super(404, errorCode);
  }
}

export {
  DatabaseError,
  BaseError,
  BadRequestError,
  UnknownServerError,
  UnauthorizedError,
  MethodNotAllowedError,
  ResourceNotFoundError,
};
