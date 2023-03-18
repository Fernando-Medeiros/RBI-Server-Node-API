import { describe, it, expect } from "vitest";
import { UseCaseEquipmentsHelpers as helpers } from "./mock/utils";

import { deleteCase } from "../delete.case";
import { EquipmentRequestsToDelete } from "../requests/delete.requests";
import { InMemoryEquipmentRepository } from "./mock/inMemoryEquipmentRepository";

const { pubId: sub } = helpers.getDataMock();

describe("UseCases - Equipment - Delete - OK", () => {
  helpers.insertOneToDatabase();

  it("Should delete the Equipment", async () => {
    const res = await deleteCase(
      new EquipmentRequestsToDelete(sub),
      new InMemoryEquipmentRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Equipment - Delete - Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(
        new EquipmentRequestsToDelete(""),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
