import { describe, it, expect } from "vitest";
import { UseCaseSkillsHelpers as helpers } from "./mock/utils";

import { deleteCase } from "../delete.case";
import { SkillsRequestsToDelete } from "../requests/delete.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";

const sub = helpers.getPubId();

describe("UseCases - Skills - Delete - OK", () => {
  helpers.insertOneToDatabase();

  it("Should delete the Skills", async () => {
    const res = await deleteCase(
      new SkillsRequestsToDelete(sub),
      new InMemorySkillsRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Skills - Delete - Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(
        new SkillsRequestsToDelete(""),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
