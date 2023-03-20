import { describe, it, expect } from "vitest";
import { UseCaseInventoryHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "../get-by-id.case";
import { InventoryRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryInventoryRepository } from "./mock/inMemoryInventoryRepository";

const sub = helpers.getPubId();

describe("UseCases - Inventory - Get By Id - OK", () => {
  helpers.insertOneToDatabase();

  it("Should get a Inventory by id", async () => {
    const res = await getByIdCase(
      new InventoryRequestsToGetById(sub),
      new InMemoryInventoryRepository()
    );

    expect(res).toContain({ pubId: sub });
  });
});

describe("UseCases - Inventory - Get By Id - Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    const sub = "000-000";

    await expect(() =>
      getByIdCase(
        new InventoryRequestsToGetById(sub),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(
        new InventoryRequestsToGetById(""),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const sub = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(
        new InventoryRequestsToGetById(sub),
        new InMemoryInventoryRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
