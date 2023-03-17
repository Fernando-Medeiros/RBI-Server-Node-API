import { describe, it, expect } from "vitest";
import { UseCaseStatusHelpers as helpers } from "./mock/utils";

import { deleteCase } from "../delete.case";
import { StatusRequestsToDelete } from "../requests/delete.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";

const { pubId: sub } = helpers.getStatusDataMock();

describe("UseCases - Status - Delete - OK", () => {
  helpers.insertOneStatusToDatabase();

  it("Should delete the status", async () => {
    const res = await deleteCase(
      new StatusRequestsToDelete(sub),
      new InMemoryStatusRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Status - Delete - Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(new StatusRequestsToDelete(""), new InMemoryStatusRepository())
    ).rejects.toThrowError("not found");
  });
});
