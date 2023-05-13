import { describe, it, expect } from "vitest";
import { InventoryRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryInventoryRepository } from "./mock/inMemoryInventoryRepository";
import { UseCaseInventoryHelpers } from "./mock/utils";
import { getByIdCase } from "../get-by-id.case";

const Repository = new InMemoryInventoryRepository();
const Helpers = new UseCaseInventoryHelpers(Repository);

describe("Get-By-Id-> Inventory-OK", () => {
  Helpers.insertOneToDatabase();

  it("Should get a Inventory by id", async () => {
    const res = await getByIdCase(
      new InventoryRequestsToGetById({ id: Helpers.pubId() }),
      Repository
    );

    expect(res).toContain({ pubId: Helpers.pubId() });
  });
});

describe("Get-By-Id-> Inventory-Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    await expect(() =>
      getByIdCase(new InventoryRequestsToGetById({ id: "000-000" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(new InventoryRequestsToGetById({ id: "" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    await expect(() =>
      getByIdCase(
        new InventoryRequestsToGetById({
          id: "b2cd80d6-825d-4b67-a7a5-3cface4f19b9",
        }),
        Repository
      )
    ).rejects.toThrowError("not found");
  });
});
