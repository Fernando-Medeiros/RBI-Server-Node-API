import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeNameDelOK");

describe("Character - Delete - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);

  it("Should return 204 when deleting the character", async () => {
    const res = await app.delete("/characters").set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });
});
