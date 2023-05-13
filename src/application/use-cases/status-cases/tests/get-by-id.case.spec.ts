import { describe, it, expect } from "vitest";
import { StatusRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";
import { UseCaseStatusHelpers } from "./mock/utils";
import { getByIdCase } from "../get-by-id.case";

const Repository = new InMemoryStatusRepository();
const Helpers = new UseCaseStatusHelpers(Repository);

describe("Get-By-Id-> Status-OK", () => {
  Helpers.insertOneToDatabase();

  it("Should get a status by id", async () => {
    const res = await getByIdCase(
      new StatusRequestsToGetById({ id: Helpers.pubId() }),
      Repository
    );

    expect(res).toContain({ pubId: Helpers.pubId() });
  });
});

describe("Get-By-Id-> Status-Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    await expect(() =>
      getByIdCase(new StatusRequestsToGetById({ id: "000-000" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(new StatusRequestsToGetById({ id: "" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    await expect(() =>
      getByIdCase(
        new StatusRequestsToGetById({
          id: "b2cd80d6-825d-4b67-a7a5-3cface4f19b9",
        }),
        Repository
      )
    ).rejects.toThrowError("not found");
  });
});
