import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";
import { CharacterMock } from "../mock/character.mock";

const mock = new CharacterMock("DeleteCharEx");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));
  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Delete - Exceptions", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header);

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/characters")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 404 when trying to delete non-existent character", async () => {
    await app.delete("/characters").set(header);

    const res = await app
    .delete("/characters")
    .set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toBeTypeOf("object");
  });
});
