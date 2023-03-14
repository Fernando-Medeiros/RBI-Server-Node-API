import { describe, expect, it } from "vitest";
import { v4 } from "uuid";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeByIdEx");

describe("Character - Get By Id - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.removeAfterAll("/characters", header);

  it("Should return 400 when sending an invalid id", async () => {
    const res = await app.get(`/characters/${"00000000000000"}`).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/characters/${mock.pubId}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 404 when sending a valid but nonexistent id", async () => {
    const res = await app.get(`/characters/${v4()}`).set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toBeTypeOf("object");
  });
});
