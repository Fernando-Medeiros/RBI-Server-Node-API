import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Inventory - Create - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/inventories", headers);
  });

  it("Should return 201 when creating new inventory", async () => {
    const res = await app.post("/inventories").set(headers);

    expect(res.statusCode).toEqual(201);
  });
});
