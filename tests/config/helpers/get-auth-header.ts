import { TokenMock } from "tests/config/token";
import {
  authHeader,
  AuthorizationSchema,
} from "../headers/authorization.header";

export class HelperHeaders {
  static async mockAuthorizationHeader(
    pubId: string
  ): Promise<AuthorizationSchema> {
    const token = await TokenMock.createToken({ sub: pubId });

    return authHeader(token);
  }
}
