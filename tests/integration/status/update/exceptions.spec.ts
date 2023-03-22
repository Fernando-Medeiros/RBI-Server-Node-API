import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Update - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/status", mock.dataToCreate, header);
  helpers.removeAfterAll("/status", header);

  it("Should return 400 when trying to update invalid points", async () => {
    const toUpdate = { points: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid experience", async () => {
    const toUpdate = { experience: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid strength", async () => {
    const toUpdate = { strength: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid intelligence", async () => {
    const toUpdate = { intelligence: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid dexterity", async () => {
    const toUpdate = { dexterity: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid vitality", async () => {
    const toUpdate = { vitality: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid health", async () => {
    const toUpdate = { health: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid energy", async () => {
    const toUpdate = { energy: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid currentHealth", async () => {
    const toUpdate = { currentHealth: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid currentEnergy", async () => {
    const toUpdate = { currentEnergy: 0 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/status")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
