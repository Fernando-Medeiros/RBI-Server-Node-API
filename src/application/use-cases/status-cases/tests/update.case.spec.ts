import { describe, it, expect } from "vitest";
import { StatusRequestsToUpdate } from "../requests/update.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";
import { UseCaseStatusHelpers } from "./mock/utils";
import { updateCase } from "../update.case";

const Repository = new InMemoryStatusRepository();
const Helpers = new UseCaseStatusHelpers(Repository);
const sub = Helpers.pubId();

describe("Update-> Status-OK", () => {
  Helpers.insertOneToDatabase();

  const data = Helpers.getDataMock();

  it("Should update all status", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, ...data }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update points to assign", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, points: 10 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update experience", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, experience: 500 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update strength", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, strength: 2 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update intelligence", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, intelligence: 10 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update dexterity", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, dexterity: 80 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update vitality", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, vitality: 99 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update health", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, health: 1 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update energy", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, energy: 400 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update currentHealth", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, currentHealth: 111 }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update currentEnergy", async () => {
    const res = await updateCase(
      new StatusRequestsToUpdate({ sub, currentEnergy: 222 }),
      Repository
    );
    expect(res).toBeUndefined();
  });
});

describe("Update-> Status-Exceptions", () => {
  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub }), Repository)
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid points", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub, points: -1 }), Repository)
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid experience", async () => {
    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate({ sub, experience: -1 }),
        Repository
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid strength", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub, strength: -1 }), Repository)
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid intelligence", async () => {
    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate({ sub, intelligence: -1 }),
        Repository
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid dexterity", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub, dexterity: -1 }), Repository)
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid vitality", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub, vitality: -1 }), Repository)
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid health", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub, health: -1 }), Repository)
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid energy", async () => {
    await expect(() =>
      updateCase(new StatusRequestsToUpdate({ sub, energy: -1 }), Repository)
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid currentHealth", async () => {
    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate({ sub, currentHealth: -1 }),
        Repository
      )
    ).rejects.toThrowError("format must be a number");
  });

  it("Should return an error when sending invalid currentEnergy", async () => {
    await expect(() =>
      updateCase(
        new StatusRequestsToUpdate({ sub, currentEnergy: -1 }),
        Repository
      )
    ).rejects.toThrowError("format must be a number");
  });
});
