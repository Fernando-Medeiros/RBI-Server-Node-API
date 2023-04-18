import { encode, PropsToken } from "@inf/security/token/encode.impl";

const convertToMilliseconds = (exp: number): number => {
  return Math.floor(Date.now() / 1000) + 60 * exp;
};

export class TokenMock {
  static async createToken(payload: PropsToken): Promise<string> {
    payload.scope = "refresh";
    payload.exp = convertToMilliseconds(20);

    return await encode<PropsToken, string>(payload);
  }
}
