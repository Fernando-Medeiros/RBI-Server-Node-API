import { describe, it, expect } from "vitest";
import { UseCaseEquipmentsHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "../get-by-id.case";
import { EquipmentRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryEquipmentRepository } from "./mock/inMemoryEquipmentRepository";

const { pubId: sub } = helpers.getDataMock();

describe("UseCases - Equipment - Get By Id - OK", () => {
  helpers.insertOneToDatabase();

  it("Should get a Equipment by id", async () => {
    const res = await getByIdCase(
      new EquipmentRequestsToGetById(sub),
      new InMemoryEquipmentRepository()
    );

    expect(res).toContain({ pubId: sub });
  });
});

describe("UseCases - Equipment - Get By Id - Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    const sub = "000-000";

    await expect(() =>
      getByIdCase(
        new EquipmentRequestsToGetById(sub),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(
        new EquipmentRequestsToGetById(""),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const sub = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(
        new EquipmentRequestsToGetById(sub),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
