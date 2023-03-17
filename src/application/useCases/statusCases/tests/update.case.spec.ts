import { describe, it, expect } from "vitest";
import { UseCaseStatusHelpers as helpers } from "./mock/utils";

import { updateCase } from "../updateCase";
import { StatusRequestsToUpdate } from "../requests/update.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";

const {
  pubId: sub,
  points,
  experience,
  strength,
  intelligence,
  dexterity,
  vitality,
  health,
  energy,
  currentHealth,
  currentEnergy,
} = helpers.getStatusDataMock();

describe("UseCases - Status - Update - OK", () => {
  helpers.insertOneStatusToDatabase();

  it("Should update all status", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(
        sub,
        points,
        experience,
        strength,
        intelligence,
        dexterity,
        vitality,
        health,
        energy,
        currentHealth,
        currentEnergy
      ),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update points to assign", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, points),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update experience", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, experience),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update strength", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, strength),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update intelligence", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, intelligence),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update dexterity", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, dexterity),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update vitality", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, vitality),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update health", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, health),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update energy", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, energy),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update currentHealth", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, currentHealth),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update currentEnergy", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, currentEnergy),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });
});

describe("UseCases - Status - Update - Exceptions", () => {
  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid points", async () => {
    const points = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, points),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid experience", async () => {
    const experience = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, experience),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid strength", async () => {
    const strength = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, strength),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid intelligence", async () => {
    const intelligence = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, intelligence),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid dexterity", async () => {
    const dexterity = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, dexterity),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid vitality", async () => {
    const vitality = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, vitality),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid health", async () => {
    const health = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, health),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid energy", async () => {
    const energy = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, energy),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid currentHealth", async () => {
    const currentHealth = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, currentHealth),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid currentEnergy", async () => {
    const currentEnergy = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, currentEnergy),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });
});
