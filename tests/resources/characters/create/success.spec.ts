import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";
import { CharacterMock } from "../mock/character.mock";

const mock = new CharacterMock("CreateCharEx");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));
  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Create - Success", () => {
  helperInsRem.removeAfterAll(header);

  it("Should return 201 when creating new character", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set(header);

    expect(res.statusCode).toEqual(201);
    expect(res.body).toBeNull;
  });
});
