import { describe, it, expect } from "vitest";
import { UseCaseSkillsHelpers as helpers } from "./mock/utils";

import { createCase } from "../create.case";
import { SkillsRequestsToCreate } from "../requests/create.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";

const sub = helpers.getPubId();

describe("UseCases - Skills - Create - OK", () => {
  it("Should create the Skills", async () => {
    const res = await createCase(
      new SkillsRequestsToCreate(sub),
      new InMemorySkillsRepository()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Skills - Create - Exceptions", () => {
  it("Should return error when trying to duplicate a Skills in use", async () => {
    await expect(() =>
      createCase(
        new SkillsRequestsToCreate(sub),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("one Skills allowed per character");
  });
});
