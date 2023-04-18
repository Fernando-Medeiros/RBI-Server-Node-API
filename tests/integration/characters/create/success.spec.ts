import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new CharacterMock("FakeNameNewOk");
const headers = { ...secretHeader, ...{ Authorization: "" } };

describe("Character - Create - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/characters", headers);
  });

  it("Should return 201 when creating new character", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set(headers);

    expect(res.statusCode).toEqual(201);
  });
});
