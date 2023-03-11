import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";
import { CharacterMock } from "../mock/character.mock";

const mock = new CharacterMock("DeleteCharOk");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));

  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Delete - Success", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header);

  it("Should return 204 when deleting the character", async () => {
    const res = await app.delete("/characters").set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });
});
