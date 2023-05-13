import { describe, it, expect } from "vitest";
import { StatusRequestsToDelete } from "../requests/delete.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";
import { UseCaseStatusHelpers } from "./mock/utils";
import { deleteCase } from "../delete.case";

const Repository = new InMemoryStatusRepository();
const Helpers = new UseCaseStatusHelpers(Repository);

describe("Delete-> Status-OK", () => {
  Helpers.insertOneToDatabase();

  it("Should delete the status", async () => {
    const res = await deleteCase(
      new StatusRequestsToDelete({ sub: Helpers.pubId() }),
      Repository
    );

    expect(res).toBeUndefined();
  });
});

describe("Delete-> Status-Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(new StatusRequestsToDelete({ sub: "" }), Repository)
    ).rejects.toThrowError("not found");
  });
});
