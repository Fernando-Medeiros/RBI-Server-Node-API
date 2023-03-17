import { describe, it, expect } from "vitest";
import { UseCaseStatusHelpers as helpers } from "./mock/utils";

import { createCase } from "../create.case";
import { StatusRequestsToCreate } from "../requests/create.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";

const { pubId: sub } = helpers.getStatusDataMock();

describe("UseCases - Status - Create - OK", () => {
  it("Should create the status", async () => {
    const res = await createCase(
      new StatusRequestsToCreate(sub),
      new InMemoryStatusRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Status - Create - Exceptions", () => {
  it("Should return error when trying to duplicate a status in use", async () => {
    await expect(() =>
      createCase(
        new StatusRequestsToCreate(sub),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("one status allowed per character");
  });
});
