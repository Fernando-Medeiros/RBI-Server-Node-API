import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { StatusMock } from "../mock/status.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Status - Update - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/status", mock.dataToCreate, headers);
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/status", headers);
  });

  it("Should return 400 when trying to update invalid points", async () => {
    const toUpdate = { points: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid experience", async () => {
    const toUpdate = { experience: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid strength", async () => {
    const toUpdate = { strength: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid intelligence", async () => {
    const toUpdate = { intelligence: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid dexterity", async () => {
    const toUpdate = { dexterity: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid vitality", async () => {
    const toUpdate = { vitality: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid health", async () => {
    const toUpdate = { health: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid energy", async () => {
    const toUpdate = { energy: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid currentHealth", async () => {
    const toUpdate = { currentHealth: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid currentEnergy", async () => {
    const toUpdate = { currentEnergy: 0 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/status")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
