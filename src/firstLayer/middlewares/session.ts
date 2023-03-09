import type { NextFunction, Request, Response } from "express";

import { validate } from "uuid";
import { InternalServerError, Unauthorized } from "@src/utils/http.exceptions";

import { decodeTokenJwt } from "@inf/security/token/token.impl";

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

  const { sub } = await decodeTokenJwt(String(token));

  if (sub === undefined || !validate(sub)) {
    new InternalServerError(
      "Could not verify credentials, please sign in again to refresh session!"
    );
  }

  req.headers = { sub: sub };

  next();
};
