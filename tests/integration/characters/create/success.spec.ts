import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeNameNewOk");

describe("Character - Create - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.removeAfterAll("/characters", header);

  it("Should return 201 when creating new character", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set(header);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toBeNull;
  });
});
