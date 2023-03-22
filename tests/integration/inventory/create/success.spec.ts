import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new InventoryMock();

describe("Inventory - Create - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.removeAfterAll("/inventories", header);

  it("Should return 201 when creating new inventory", async () => {
    const res = await app.post("/inventories").set(header);

    expect(res.statusCode).toEqual(201);
  });
});
