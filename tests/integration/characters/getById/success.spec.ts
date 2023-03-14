import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeByIdOK");

describe("Character - Get By Id - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.removeAfterAll("/characters", header);

  it("Should return a character", async () => {
    const res = await app.get(`/characters/${mock.pubId}`).set(header);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeTypeOf("object");
  });
});
