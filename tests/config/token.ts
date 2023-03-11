import type { Algorithm } from "jsonwebtoken";
import { env } from "process";
import Jwt from "jsonwebtoken";

import { InternalServerError } from "@src/utils/http.exceptions";
import { randomUUID } from "crypto";

const SECRET = env["SECRET_KEY"] || randomUUID();
const ALGORITHM: Algorithm = "HS512";

export class TokenMock {
  encode = async (payload: PropsToken): Promise<string> => {
    const token = await new Promise((resolve) => {
      resolve(Jwt.sign(payload, SECRET, { algorithm: ALGORITHM }));
    }).catch(() => {
      throw new InternalServerError("Internal failure while encoding token!");
    });

    return token as string;
  };

  convertToMilliseconds = (exp: number): number => {
    return Math.floor(Date.now() / 1000) + 60 * exp;
  };

  createToken = async (payload: PropsToken): Promise<string> => {
    payload.scope = "refresh";
    payload.exp = this.convertToMilliseconds(20);

    return await this.encode(payload);
  };
}

export interface PropsToken {
  sub: string;
  exp?: number;
  scope?: string;
}
