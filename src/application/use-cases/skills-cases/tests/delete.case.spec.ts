import { describe, it, expect } from "vitest";
import { SkillsRequestsToDelete } from "../requests/delete.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";
import { UseCaseSkillsHelpers } from "./mock/utils";
import { deleteCase } from "../delete.case";

const Repository = new InMemorySkillsRepository();
const Helpers = new UseCaseSkillsHelpers(Repository);

describe("Delete-> Skills-OK", () => {
  Helpers.insertOneToDatabase();

  it("Should delete the Skills", async () => {
    const res = await deleteCase(
      new SkillsRequestsToDelete({ sub: Helpers.pubId() }),
      Repository
    );

    expect(res).toBeUndefined();
  });
});

describe("Delete-> Skills-Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(new SkillsRequestsToDelete({ sub: "" }), Repository)
    ).rejects.toThrowError("not found");
  });
});
