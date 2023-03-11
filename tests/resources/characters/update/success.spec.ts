import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders, HelperInsertRemove } from "@tes/config/utils";

const mock = new CharacterMock("UpdateCharOk");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));
  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Update - Success", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header);
  helperInsRem.removeAfterAll(header);

  it("Should update the charName", async () => {
    const toUpdate = {charName: "NewCharNameOK"}

    const res = await app.
    patch("/characters")
    .send(toUpdate)
    .set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update the className", async () => {
    const toUpdate = {className: "Warrior"}

    const res = await app.
    patch("/characters")
    .send(toUpdate)
    .set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });


  it("Should update the level", async () => {
    const toUpdate = {level: 2}

    const res = await app.
    patch("/characters")
    .send(toUpdate)
    .set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update level, charName and className", async () => {
    const toUpdate = {
        level: 3,
        charName: "NewUpdateName",
        className: "Rogue"
    }

    const res = await app.
    patch("/characters")
    .send(toUpdate)
    .set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });
});
