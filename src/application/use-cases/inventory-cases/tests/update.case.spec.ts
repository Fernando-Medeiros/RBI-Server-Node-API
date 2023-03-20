import { describe, it, expect } from "vitest";
import { UseCaseInventoryHelpers as helpers } from "./mock/utils";

import { updateCase } from "../update.case";
import { InventoryRequestsToUpdate } from "../requests/update.requests";
import { InMemoryInventoryRepository } from "./mock/inMemoryInventoryRepository";

const sub = helpers.getPubId();

describe("UseCases - Inventory - Update - OK", () => {
  helpers.insertOneToDatabase();

  const data = helpers.getDataMock();

  it("Should update all Inventory", async () => {
    const res = await updateCase(
      new InventoryRequestsToUpdate(sub, data),
      new InMemoryInventoryRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update accessory", async () => {
    data.accessories.push(helpers.getFakeAccessory());

    const res = await updateCase(
      new InventoryRequestsToUpdate(sub, data),
      new InMemoryInventoryRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update armor", async () => {
    data.armors.push(helpers.getFakeArmor());

    const res = await updateCase(
      new InventoryRequestsToUpdate(sub, data),
      new InMemoryInventoryRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update consumable", async () => {
    data.consumables.push(helpers.getFakeConsumable());

    const res = await updateCase(
      new InventoryRequestsToUpdate(sub, data),
      new InMemoryInventoryRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update material", async () => {
    data.materials.push(helpers.getFakeMaterial());

    const res = await updateCase(
      new InventoryRequestsToUpdate(sub, data),
      new InMemoryInventoryRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update weapon", async () => {
    data.weapons.push(helpers.getFakeWeapon());

    const res = await updateCase(
      new InventoryRequestsToUpdate(sub, data),
      new InMemoryInventoryRepository()
    );
    expect(res).toBeUndefined();
  });
});

describe("UseCases - Inventory - Update - Exceptions", () => {
  let data = helpers.getDataMock();

  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, {}),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid accessory", async () => {
    data = helpers.getDataMock();
    data.accessories.push({ name: "missing fields" });

    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, data),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid armor", async () => {
    data = helpers.getDataMock();
    data.armors.push({ name: "missing fields" });

    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, data),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid consumable", async () => {
    data = helpers.getDataMock();
    data.consumables.push({ name: "missing fields" });

    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, data),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid material", async () => {
    data = helpers.getDataMock();
    data.materials.push({ name: "missing fields" });

    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, data),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid material", async () => {
    data = helpers.getDataMock();
    data.materials.push({ name: "missing fields" });

    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, data),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid weapon", async () => {
    data = helpers.getDataMock();
    data.weapons.push({ name: "missing fields" });

    await expect(() =>
      updateCase(
        new InventoryRequestsToUpdate(sub, data),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });
});
