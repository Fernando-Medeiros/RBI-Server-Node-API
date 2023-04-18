import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";

const mock = new InventoryMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Inventory - Delete - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/inventories")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent inventory", async () => {
    const res = await app.delete("/inventories").set(headers);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
