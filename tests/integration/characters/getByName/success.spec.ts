import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";
import { CharacterMock } from "../mock/character.mock";

const mock = new CharacterMock("GetByNameCharOk");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));

  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Get By Name - Success", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header);
  helperInsRem.removeAfterAll(header);

  it("Should return a character", async () => {
    const res = await app
    .get(`/characters/name/${mock.charName}`)
    .set(header);
    
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeTypeOf("object");
  });
});
