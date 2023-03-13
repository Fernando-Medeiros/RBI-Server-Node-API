import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";

const mock = new CharacterMock("UpdateCharEx");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));
  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Update - Exceptions", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header);
  helperInsRem.removeAfterAll(header);

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/characters")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid level", async () => {
    const toUpdate = {level: {}}

    const res = await app
    .patch("/characters")
    .send(toUpdate)
    .set(header)

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid charName", async () => {
    const toUpdate = {charName: "Example00"}

    const res = await app
    .patch("/characters")
    .send(toUpdate)
    .set(header)

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid className", async () => {
    const toUpdate = {className: "M@ge"}

    const res = await app
    .patch("/characters")
    .send(toUpdate)
    .set(header)

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid level, charName and className", async () => {
    const toUpdate = {
      level: 0,
      charName: "Ex@ampleX-0",
      className: "M@ge"
    }

    const res = await app
    .patch("/characters")
    .send(toUpdate)
    .set(header)

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update with a name already in use", async () => {
    const toUpdate = {charName: mock.charName}

    const res = await app
    .patch("/characters")
    .send(toUpdate)
    .set(header)

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when not passing data to update", async () => {
    const toUpdate = {}

    const res = await app
    .patch("/characters")
    .send(toUpdate)
    .set(header)

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });
});
