import { beforeAll, afterAll } from "vitest";
import { app } from "@tes/config/config";
import { TokenMock } from "@tes/config/token";

const jwt = new TokenMock();

export class HelperInsertRemove {
  public static insertBeforeAll = (
    path: string,
    data: object,
    header: { Authorization: string }
  ) => {
    beforeAll(async () => {
      await app.post(path).send(data).set(header);
    });
  };

  public static removeAfterAll = (
    path: string,
    header: { Authorization: string }
  ) => {
    afterAll(async () => {
      await app.delete(path).set(header);
    });
  };
}

export class HelperHeaders {
  public static async getAuthorizationHeader(
    pubId: string
  ): Promise<{ Authorization: string }> {
    const token = await jwt.createToken({ sub: pubId });

    return { Authorization: `Bearer ${token}` };
  }
}
