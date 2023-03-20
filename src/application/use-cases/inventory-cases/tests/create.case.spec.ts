import { describe, it, expect } from "vitest";
import { UseCaseInventoryHelpers as helpers } from "./mock/utils";

import { createCase } from "../create.case";
import { InventoryRequestsToCreate } from "../requests/create.requests";
import { InMemoryInventoryRepository } from "./mock/inMemoryInventoryRepository";

const sub = helpers.getPubId();

describe("UseCases - Inventory - Create - OK", () => {
  it("Should create the Inventory", async () => {
    const res = await createCase(
      new InventoryRequestsToCreate(sub),
      new InMemoryInventoryRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Inventory - Create - Exceptions", () => {
  it("Should return error when trying to duplicate a Inventory in use", async () => {
    await expect(() =>
      createCase(
        new InventoryRequestsToCreate(sub),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("one Inventory allowed per character");
  });
});
