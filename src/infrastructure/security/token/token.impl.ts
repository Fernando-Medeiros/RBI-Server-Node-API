import type { Algorithm } from "jsonwebtoken";
import { env } from "process";
import Jwt from "jsonwebtoken";

import { Unauthorized } from "@src/utils/http.exceptions";
import { randomUUID } from "crypto";

const SECRET = env["SECRET_KEY"] || randomUUID();
const ALGORITHM: Algorithm = "HS512";

export const decodeTokenJwt = async (token: string): Promise<PropsToken> => {
  const payload = await new Promise((resolve) => {
    resolve(Jwt.verify(token, SECRET, { algorithms: [ALGORITHM] }));
  }).catch(() => {
    throw new Unauthorized("Could not validate credentials!");
  });

  return payload as PropsToken;
};

export interface PropsToken {
  sub: string;
  exp?: number;
  scope?: string;
}
