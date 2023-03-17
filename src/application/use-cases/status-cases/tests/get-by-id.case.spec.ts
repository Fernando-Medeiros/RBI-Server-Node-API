import { describe, it, expect } from "vitest";
import { UseCaseStatusHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "../get-by-id.case";
import { StatusRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";

const { pubId: sub } = helpers.getStatusDataMock();

describe("UseCases - Status - Get By Id - OK", () => {
  helpers.insertOneStatusToDatabase();

  it("Should get a status by id", async () => {
    const res = await getByIdCase(
      new StatusRequestsToGetById(sub),
      new InMemoryStatusRepository()
    );

    expect(res).toContain({ pubId: sub });
  });
});

describe("UseCases - Status - Get By Id - Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    const sub = "000-000";

    await expect(() =>
      getByIdCase(
        new StatusRequestsToGetById(sub),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(
        new StatusRequestsToGetById(""),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const sub = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(
        new StatusRequestsToGetById(sub),
        new InMemoryStatusRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
