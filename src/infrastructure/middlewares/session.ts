import type { NextFunction, Request, Response } from 'express';
import { CommonValidators } from 'app/validators/common.validators';
import { decode, PropsToken } from 'infra/security/token/decode.impl';

export const sessionMiddleware = async (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const { authorization } = req.headers;

    const token = authorization?.substring(authorization.indexOf(' ') + 1);

    CommonValidators.validateToken(token);

    const { sub } = await decode<string, PropsToken>(String(token));

    CommonValidators.validateID(sub);

    req.headers = { sub: sub };

    next();
};
