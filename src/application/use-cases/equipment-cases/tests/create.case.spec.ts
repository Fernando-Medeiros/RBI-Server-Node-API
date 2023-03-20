import { describe, it, expect } from "vitest";
import { UseCaseEquipmentsHelpers as helpers } from "./mock/utils";

import { createCase } from "../create.case";
import { EquipmentRequestsToCreate } from "../requests/create.requests";
import { InMemoryEquipmentRepository } from "./mock/inMemoryEquipmentRepository";

const { pubId: sub } = helpers.getDataMock();

describe("UseCases - Equipment - Create - OK", () => {
  it("Should create the equipment", async () => {
    const res = await createCase(
      new EquipmentRequestsToCreate(sub),
      new InMemoryEquipmentRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Equipment - Create - Exceptions", () => {
  it("Should return error when trying to duplicate a equipment in use", async () => {
    await expect(() =>
      createCase(
        new EquipmentRequestsToCreate(sub),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("one equipment allowed per character");
  });
});
