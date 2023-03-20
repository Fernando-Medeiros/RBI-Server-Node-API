import { describe, it, expect } from "vitest";
import { UseCaseInventoryHelpers as helpers } from "./mock/utils";

import { deleteCase } from "../delete.case";
import { InventoryRequestsToDelete } from "../requests/delete.requests";
import { InMemoryInventoryRepository } from "./mock/inMemoryInventoryRepository";

const sub = helpers.getPubId();

describe("UseCases - Inventory - Delete - OK", () => {
  helpers.insertOneToDatabase();

  it("Should delete the Inventory", async () => {
    const res = await deleteCase(
      new InventoryRequestsToDelete(sub),
      new InMemoryInventoryRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Inventory - Delete - Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(
        new InventoryRequestsToDelete(""),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
