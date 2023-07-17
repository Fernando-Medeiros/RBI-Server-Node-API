import type { NextFunction, Request, Response } from 'express';
import { decode, PropsToken } from 'infra/security/token/decode.impl';
import { CommonValidators } from 'utils/common.validators';

export const SessionMiddleware = async (
    req: Request,
    _res: Response,
    next: NextFunction,
) => {
    const { authorization } = req.headers;

    const token = authorization?.substring(authorization.indexOf(' ') + 1);

    CommonValidators.validateToken(token);

    const { sub } = await decode<string, PropsToken>(String(token));

    CommonValidators.validateUUID(sub);

    req.headers = { id: sub };

    next();
};
