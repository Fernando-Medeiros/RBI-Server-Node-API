import { describe, expect, it } from "vitest";

import { app } from "@tes/config/config";
import { HelperInsertRemove, HelperHeaders } from "@tes/config/utils";
import { CharacterMock } from "../mock/character.mock";

const mock = new CharacterMock("CreateCharOk");
const helperHeader = new HelperHeaders();
const helperInsRem = new HelperInsertRemove("/characters");

const header = { Authorization: "Bearer " };

it("Should return authorized header with bearer token for tests", async () => {
  Object.assign(header, await helperHeader.getAuthorizationHeader(mock.pubId));
  expect(header.Authorization.length).toBeGreaterThan(150);
});

describe("Character - Create - Exceptions", () => {
  helperInsRem.insertBeforeAll(mock.dataToCreate, header);
  helperInsRem.removeAfterAll(header);

  it("Should return 400 when sending invalid name", async () => {
    const dataToCreate = {
      charName: "@@00AA",
      className: "Rogue",
    };
    const res = await app.post("/characters").send(dataToCreate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when submitting a name already in use", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });
});
