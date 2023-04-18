import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new CharacterMock("FakeNameUpEx");
const headers = { ...secretHeader, ...{ Authorization: "" } };

describe("Character - Update - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/characters", mock.dataToCreate, headers);
  });

  afterAll(async () => {
    await Helpers.removeAfterAll("/characters", headers);
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/characters")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid level", async () => {
    const toUpdate = { level: {} };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid charName", async () => {
    const toUpdate = { charName: "Example00" };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid className", async () => {
    const toUpdate = { className: "M@ge" };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update invalid level, charName and className", async () => {
    const toUpdate = {
      level: 0,
      charName: "Ex@ampleX-0",
      className: "M@ge",
    };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when trying to update with a name already in use", async () => {
    const toUpdate = { charName: mock.charName };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when not passing data to update", async () => {
    const toUpdate = {};

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });
});
