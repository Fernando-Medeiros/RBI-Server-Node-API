import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

import accessoryExample from "example/items/accessory.example.json";
import armorExample from "example/items/armor.example.json";
import consumableExample from "example/items/consumable.example.json";
import materialExample from "example/items/material.example.json";
import weaponExample from "example/items/weapon.example.json";

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Inventory - Update - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/inventories", mock.dataToCreate, headers);
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/inventories", headers);
  });

  it("Should update the inventory", async () => {
    const toUpdate = {
      armors: [armorExample, armorExample],
      accessories: [accessoryExample, accessoryExample],
      consumables: [consumableExample, consumableExample],
      materials: [materialExample, materialExample],
      weapons: [weaponExample, weaponExample],
    };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the armors", async () => {
    const toUpdate = { armors: [armorExample] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the accessories", async () => {
    const toUpdate = { accessories: [accessoryExample] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the consumables", async () => {
    const toUpdate = { consumables: [consumableExample] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the materials", async () => {
    const toUpdate = { materials: [materialExample] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the weapons", async () => {
    const toUpdate = { weapons: [weaponExample] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
