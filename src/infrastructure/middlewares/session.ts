import type { NextFunction, Request, Response } from "express";
import { CommonValidators } from "@app/validators/common.validators";
import { JWT } from "@inf/security/token/token.impl";

export const sessionMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  const token = authorization?.substring(authorization.indexOf(" ") + 1);

  CommonValidators.validateToken(token);

  const { sub } = await JWT.decode(String(token));

  CommonValidators.validateID(sub);

  req.headers = { sub: sub };

  next();
};
