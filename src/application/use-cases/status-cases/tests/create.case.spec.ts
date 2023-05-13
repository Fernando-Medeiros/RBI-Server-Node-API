import { describe, it, expect } from "vitest";
import { StatusRequestsToCreate } from "../requests/create.requests";
import { InMemoryStatusRepository } from "./mock/inMemoryStatusRepository";
import { UseCaseStatusHelpers } from "./mock/utils";
import { createCase } from "../create.case";

const Repository = new InMemoryStatusRepository();
const Helpers = new UseCaseStatusHelpers(Repository);

describe("Create-> Status-OK", () => {
  it("Should create the status", async () => {
    const res = await createCase(
      new StatusRequestsToCreate({ sub: Helpers.pubId() }),
      Repository
    );

    expect(res).toBeUndefined();
  });
});

describe("Create-> Status-Exceptions", () => {
  it("Should return error when trying to duplicate a status in use", async () => {
    await expect(() =>
      createCase(
        new StatusRequestsToCreate({ sub: Helpers.pubId() }),
        Repository
      )
    ).rejects.toThrowError("one status allowed per character");
  });
});
