import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Update - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/status", mock.dataToCreate, header);
  helpers.removeAfterAll("/status", header);

  it("Should update the all status", async () => {
    const res = await app.patch("/status").send(mock.dataToCreate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the points", async () => {
    const toUpdate = { points: 20 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the experience", async () => {
    const toUpdate = { experience: 50 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the strength", async () => {
    const toUpdate = { strength: 3 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the intelligence", async () => {
    const toUpdate = { intelligence: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the dexterity", async () => {
    const toUpdate = { dexterity: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the vitality", async () => {
    const toUpdate = { vitality: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the health", async () => {
    const toUpdate = { health: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the energy", async () => {
    const toUpdate = { energy: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the currentHealth", async () => {
    const toUpdate = { currentHealth: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the currentEnergy", async () => {
    const toUpdate = { currentEnergy: 2 };

    const res = await app.patch("/status").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });
});
