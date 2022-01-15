import { NextFunction, Request, Response } from "express";
import { HttpStatusCodes } from "../types/Http";

export const handleCertificateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(HttpStatusCodes.OK).send();
};
