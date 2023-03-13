import { describe, expect, it } from "vitest";
import { v4 } from "uuid";

import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";

const mock = new CharacterMock("GetByIdCharEx");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));

  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Get By Id - Exceptions", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header)
  helperInsRem.removeAfterAll(header)

  it("Should return 400 when sending an invalid id", async () => {
    const res = await app
    .get(`/characters/${'00000000000000'}`)
    .set(header);
    
    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/characters/${mock.pubId}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 404 when sending a valid but nonexistent id", async () => {
    const res = await app
    .get(`/characters/${v4()}`)
    .set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toBeTypeOf("object");
  });
});
