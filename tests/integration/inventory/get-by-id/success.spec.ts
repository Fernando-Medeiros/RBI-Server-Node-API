import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { InventoryMock } from "../mock/inventory.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new InventoryMock();

describe("Inventory - Get By Id - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/inventories", mock.dataToCreate, header);
  helpers.removeAfterAll("/inventories", header);

  it("Should return inventory", async () => {
    const res = await app.get(`/inventories/${mock.pubId}`).set(header);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("pubId");
  });
});
