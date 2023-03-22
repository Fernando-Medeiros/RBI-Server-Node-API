import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeNameDelEx");

describe("Character - Delete - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/characters")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent character", async () => {
    await app.delete("/characters").set(header);

    const res = await app.delete("/characters").set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
