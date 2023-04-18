import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Inventory - Update - Exceptions", async () => {
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

  it("Should return 400 when trying to update invalid armors", async () => {
    const toUpdate = { armors: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid accessories", async () => {
    const toUpdate = { accessories: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid consumables", async () => {
    const toUpdate = { consumables: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid materials", async () => {
    const toUpdate = { materials: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid weapons", async () => {
    const toUpdate = { weapons: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });
});
