import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { CharacterMock } from "../mock/character.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new CharacterMock("FakeNameNewEx");
const headers = { ...secretHeader, Authorization: "" };

describe("Character - Create - Exceptions", async () => {
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

  it("Should return 400 when sending invalid name", async () => {
    const dataToCreate = {
      charName: "@@00AA",
      className: "Rogue",
    };
    const res = await app.post("/characters").send(dataToCreate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when submitting a name already in use", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
