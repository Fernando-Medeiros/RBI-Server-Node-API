import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new CharacterMock("FakeNameDelOK");
const headers = { ...secretHeader, Authorization: "" };

describe("Character - Delete - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/characters", mock.dataToCreate, headers);
  });

  it("Should return 204 when deleting the character", async () => {
    const res = await app.delete("/characters").set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
