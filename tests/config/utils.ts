import { beforeAll, afterAll } from "vitest";

import { app } from "@tes/config/config";

import { TokenMock } from "@tes/config/token";

export class HelperInsertRemove {
  private path: string;

  constructor(path: string) {
    this.path = path;
  }

  insertBeforeAll = (data: object, header: { Authorization: string }) => {
    beforeAll(async () => {
      await app.post(this.path).send(data).set(header);
    });
  };

  removeAfterAll = (header: { Authorization: string }) => {
    afterAll(async () => {
      await app.delete(this.path).set(header);
    });
  };
}

export class HelperHeaders {
  private jwt = new TokenMock();

  async getAuthorizationHeader(
    pubId: string
  ): Promise<{ Authorization: string }> {
    const token = await this.jwt.createToken({ sub: pubId });

    return { Authorization: `Bearer ${token}` };
  }
}
