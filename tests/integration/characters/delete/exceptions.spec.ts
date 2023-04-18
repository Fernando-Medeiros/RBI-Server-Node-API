import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new CharacterMock("FakeNameDelEx");
const headers = { ...secretHeader, Authorization: "" };

describe("Character - Delete - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/characters", mock.dataToCreate, headers);
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/characters")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent character", async () => {
    await app.delete("/characters").set(headers);

    const res = await app.delete("/characters").set(headers);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
