import { NextFunction, Request, Response } from "express";
import { HttpStatusCodes } from "../types/Http";

export const handleUpdateCertificateState = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(HttpStatusCodes.OK).send();
};

export const handleCreateReport = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(HttpStatusCodes.OK).send();
};

export const handleSendEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(HttpStatusCodes.OK).send();
};
