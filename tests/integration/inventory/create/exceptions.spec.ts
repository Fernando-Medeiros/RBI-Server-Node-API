import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new InventoryMock();

describe("Inventory - Create - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/inventories", mock.dataToCreate, header);
  helpers.removeAfterAll("/inventories", header);

  it("Should return 400 when submitting a inventory already in use", async () => {
    const res = await app.post("/inventories").set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .post("/inventories")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
