import { describe, it, expect } from "vitest";
import { UseCaseSkillsHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "../get-by-id.case";
import { SkillsRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";

const sub = helpers.getPubId();

describe("UseCases - Skills - Get By Id - OK", () => {
  helpers.insertOneToDatabase();

  it("Should get a Skills by id", async () => {
    const res = await getByIdCase(
      new SkillsRequestsToGetById(sub),
      new InMemorySkillsRepository()
    );

    expect(res).toContain({ pubId: sub });
  });
});

describe("UseCases - Skills - Get By Id - Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    const sub = "000-000";

    await expect(() =>
      getByIdCase(
        new SkillsRequestsToGetById(sub),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(
        new SkillsRequestsToGetById(""),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const sub = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(
        new SkillsRequestsToGetById(sub),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
