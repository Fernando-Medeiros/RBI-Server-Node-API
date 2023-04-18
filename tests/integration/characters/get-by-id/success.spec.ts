import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new CharacterMock("FakeByIdOK");
const headers = { ...secretHeader, ...{ Authorization: "" } };

describe("Character - Get By Id - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/characters", mock.dataToCreate, headers);
  });

  afterAll(async () => {
    await Helpers.removeAfterAll("/characters", headers);
  });

  it("Should return a character", async () => {
    const res = await app.get(`/characters/${mock.pubId}`).set(headers);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("pubId");
  });
});
