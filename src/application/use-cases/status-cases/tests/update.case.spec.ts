import { describe, it, expect } from "vitest";
import { UseCaseStatusHelpers as helpers } from "./mock/utils";

import { updateCase } from "../update.case";
import { StatusRequestsToUpdate } from "../requests/update.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";

const { pubId: sub } = helpers.getDataMock();

let data = helpers.getDataMock();

describe("UseCases - Status - Update - OK", () => {
  helpers.insertOneToDatabase();

  it("Should update all status", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update points to assign", async () => {
    data.points = 10;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update experience", async () => {
    data.experience = 500;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update strength", async () => {
    data.strength = 2;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update intelligence", async () => {
    data.intelligence = 10;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update dexterity", async () => {
    data.dexterity = 80;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update vitality", async () => {
    data.vitality = 99;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update health", async () => {
    data.health = 1;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update energy", async () => {
    data.energy = 400;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update currentHealth", async () => {
    data.currentHealth = 111;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update currentEnergy", async () => {
    data.currentEnergy = 222;

    const res = await updateCase(
      new StatusRequestsToUpdate(sub, data),
      new InMemoryStatusRepository()
    );
    expect(res).toBeUndefined();
  });
});

describe("UseCases - Status - Update - Exceptions", () => {
  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, {}),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid points", async () => {
    data = helpers.getDataMock();
    data.points = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid experience", async () => {
    data = helpers.getDataMock();
    data.experience = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid strength", async () => {
    data = helpers.getDataMock();
    data.strength = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid intelligence", async () => {
    data = helpers.getDataMock();
    data.intelligence = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid dexterity", async () => {
    data = helpers.getDataMock();
    data.dexterity = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid vitality", async () => {
    data = helpers.getDataMock();
    data.vitality = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid health", async () => {
    data = helpers.getDataMock();
    data.health = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid energy", async () => {
    data = helpers.getDataMock();
    data.energy = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid currentHealth", async () => {
    data = helpers.getDataMock();
    data.currentHealth = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid currentEnergy", async () => {
    data = helpers.getDataMock();
    data.currentEnergy = -1;

    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate(sub, data),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("format must be a number");
  });
});
