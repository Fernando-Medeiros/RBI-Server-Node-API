import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new InventoryMock();

describe("Inventory - Update - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/inventories", mock.dataToCreate, header);
  helpers.removeAfterAll("/inventories", header);

  it("Should return 400 when trying to update invalid armors", async () => {
    const toUpdate = { armors: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid accessories", async () => {
    const toUpdate = { accessories: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid consumables", async () => {
    const toUpdate = { consumables: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid materials", async () => {
    const toUpdate = { materials: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid weapons", async () => {
    const toUpdate = { weapons: [{ name: "", type: "" }] };

    const res = await app.patch("/inventories").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });
});
