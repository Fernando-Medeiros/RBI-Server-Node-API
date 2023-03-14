import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeNameUpEx");

describe("Character - Update - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.removeAfterAll("/characters", header);

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/characters")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid level", async () => {
    const toUpdate = { level: {} };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid charName", async () => {
    const toUpdate = { charName: "Example00" };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid className", async () => {
    const toUpdate = { className: "M@ge" };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid level, charName and className", async () => {
    const toUpdate = {
      level: 0,
      charName: "Ex@ampleX-0",
      className: "M@ge",
    };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update with a name already in use", async () => {
    const toUpdate = { charName: mock.charName };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when not passing data to update", async () => {
    const toUpdate = {};

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });
});
