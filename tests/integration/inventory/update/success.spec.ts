import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

import accessoryExample from "@dom/items/examples/accessory.example.json";
import armorExample from "@dom/items/examples/armor.example.json";
import consumableExample from "@dom/items/examples/consumable.example.json";
import materialExample from "@dom/items/examples/material.example.json";
import weaponExample from "@dom/items/examples/weapon.example.json";

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
