import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeByNameEx");

describe("Character - Get By Name - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.removeAfterAll("/characters", header);

  it("Should return 400 when sending an invalid name", async () => {
    const res = await app.get(`/characters/name/${"Ex@ample"}`).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/characters/name/${mock.charName}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 404 when sending a valid but nonexistent name", async () => {
    const res = await app.get(`/characters/name/example`).set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toBeTypeOf("object");
  });
});
