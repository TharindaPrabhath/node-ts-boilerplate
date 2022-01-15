import { NextFunction, Request, Response } from "express";
import { ErrorNames, HttpError } from "../types/Error";
import log from "../config/logger";

export const logError = (
  err: HttpError,
  req: any,
  res: Response,
  next: NextFunction
) => {
  log.error(err);
  next(err);
};

export const handleError = (
  err: HttpError,
  req: any,
  res: Response,
  next: NextFunction
) => {
  res.status(getStatusCode(err)).json({
    error: {
      name: err.isJoi ? ErrorNames.VALIDATION_FAIL : err.name,
      message: err.message,
      description: err.description,
    },
  });
};

const getStatusCode = (err: HttpError): number => {
  if (err.isJoi) return 400;
  if (!err.statusCode) return 500;
  return err.statusCode;
};
