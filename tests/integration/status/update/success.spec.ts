import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Status - Update - Success", async () => {
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

  it("Should update the all status", async () => {
    const res = await app.patch("/status").send(mock.dataToCreate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the points", async () => {
    const toUpdate = { points: 20 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the experience", async () => {
    const toUpdate = { experience: 50 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the strength", async () => {
    const toUpdate = { strength: 3 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the intelligence", async () => {
    const toUpdate = { intelligence: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the dexterity", async () => {
    const toUpdate = { dexterity: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the vitality", async () => {
    const toUpdate = { vitality: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the health", async () => {
    const toUpdate = { health: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the energy", async () => {
    const toUpdate = { energy: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the currentHealth", async () => {
    const toUpdate = { currentHealth: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the currentEnergy", async () => {
    const toUpdate = { currentEnergy: 2 };

    const res = await app.patch("/status").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
