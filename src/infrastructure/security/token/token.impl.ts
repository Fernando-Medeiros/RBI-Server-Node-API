import type { Algorithm } from "jsonwebtoken";
import Jwt from "jsonwebtoken";
import { Unauthorized } from "@src/utils/http.exceptions";

const { SECRET_KEY: S, ALGORITHM: A } = process.env;

export interface PropsToken {
  sub: string;
  exp?: number;
  scope?: string;
}

export class JWT {
  static async decode(token: string): Promise<PropsToken> {
    const payload = await new Promise((resolve) => {
      resolve(
        Jwt.verify(token, S || "", {
          algorithms: [A as Algorithm],
        })
      );
    }).catch(() => {
      throw new Unauthorized("Could not validate credentials!");
    });

    return payload as PropsToken;
  }
}
