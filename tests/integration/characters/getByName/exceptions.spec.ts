import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";

const mock = new CharacterMock("GetByNameCharEx");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));

  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Get By Name - Exceptions", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header)
  helperInsRem.removeAfterAll(header)

  it("Should return 400 when sending an invalid name", async () => {
    const res = await app
    .get(`/characters/name/${'Ex@ample'}`)
    .set(header);
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/characters/name/${mock.charName}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 404 when sending a valid but nonexistent name", async () => {
    const res = await app
    .get(`/characters/name/example`)
    .set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toBeTypeOf("object");
  });
});
