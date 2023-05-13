import { describe, it, expect } from "vitest";
import { SkillsRequestsToCreate } from "../requests/create.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";
import { UseCaseSkillsHelpers } from "./mock/utils";
import { createCase } from "../create.case";

const Repository = new InMemorySkillsRepository();
const Helpers = new UseCaseSkillsHelpers(Repository);

describe("Create-> Skills-OK", () => {
  it("Should create the Skills", async () => {
    const res = await createCase(
      new SkillsRequestsToCreate({ sub: Helpers.pubId() }),
      Repository
    );

    expect(res).toBeUndefined();
  });
});

describe("Create-> Skills-Exceptions", () => {
  it("Should return error when trying to duplicate a Skills in use", async () => {
    await expect(() =>
      createCase(
        new SkillsRequestsToCreate({ sub: Helpers.pubId() }),
        Repository
      )
    ).rejects.toThrowError("one Skills allowed per character");
  });
});
