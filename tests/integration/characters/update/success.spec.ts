import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new CharacterMock("FakeNameUpOk");
const headers = { ...secretHeader, ...{ Authorization: "" } };

describe("Character - Update - Success", async () => {
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

  it("Should update the charName", async () => {
    const toUpdate = { charName: "NewCharNameOK" };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update the className", async () => {
    const toUpdate = { className: "Warrior" };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update the level", async () => {
    const toUpdate = { level: 2 };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update level, charName and className", async () => {
    const toUpdate = {
      level: 3,
      charName: "NewUpdateName",
      className: "Rogue",
    };

    const res = await app.patch("/characters").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });
});
