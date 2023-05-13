import { describe, it, expect } from "vitest";
import { InventoryRequestsToCreate } from "../requests/create.requests";
import { InMemoryInventoryRepository } from "./mock/inMemoryInventoryRepository";
import { UseCaseInventoryHelpers } from "./mock/utils";
import { createCase } from "../create.case";

const Repository = new InMemoryInventoryRepository();
const Helpers = new UseCaseInventoryHelpers(Repository);

describe("Create-> Inventory-OK", () => {
  it("Should create the Inventory", async () => {
    const res = await createCase(
      new InventoryRequestsToCreate({ sub: Helpers.pubId() }),
      Repository
    );

    expect(res).toBeUndefined();
  });
});

describe("Create-> Inventory-Exceptions", () => {
  it("Should return error when trying to duplicate a Inventory in use", async () => {
    await expect(() =>
      createCase(
        new InventoryRequestsToCreate({ sub: Helpers.pubId() }),
        Repository
      )
    ).rejects.toThrowError("one Inventory allowed per character");
  });
});
