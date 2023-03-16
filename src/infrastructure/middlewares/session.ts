import type { NextFunction, Request, Response } from "express";
import { validate } from "uuid";
import { JWT } from "@inf/security/token/token.impl";
import { BadRequest, Unauthorized } from "@src/utils/http.exceptions";

export const sessionMiddleware = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { authorization } = req.headers;

  const token = authorization?.substring(authorization.indexOf(" ") + 1);

  if (token === undefined || token?.length < 150) {
    new Unauthorized("Missing Authorization header with token");
  }

  const { sub } = await JWT.decode(String(token));

  if (sub === undefined || !validate(sub)) {
    new BadRequest(
      "Could not verify credentials, please sign in again to refresh session!"
    );
  }

  req.headers = { sub: sub };

  next();
};
