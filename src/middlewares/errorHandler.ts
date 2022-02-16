import { Request, Response, NextFunction } from 'express';
import logger from 'src/utils/logger';
import { BaseError } from 'src/interfaces/common';

export const errorHandler = (
  err: BaseError,
  req: Request,
  res: Response,
  next: NextFunction, // It is neccessary such that it can be recognised by Express as ErrorHandler
): void => {
  // TODO: add more error handling
  logger.error(err);
  const { statusCode } = err;
  res.status(statusCode).json(err);
};
