import { describe, it, expect } from "vitest";
import { SkillsRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";
import { UseCaseSkillsHelpers } from "./mock/utils";
import { getByIdCase } from "../get-by-id.case";

const Repository = new InMemorySkillsRepository();
const Helpers = new UseCaseSkillsHelpers(Repository);

describe("Get-By-Id-> Skills-OK", () => {
  Helpers.insertOneToDatabase();

  it("Should get a Skills by id", async () => {
    const res = await getByIdCase(
      new SkillsRequestsToGetById({ id: Helpers.pubId() }),
      Repository
    );

    expect(res).toContain({ pubId: Helpers.pubId() });
  });
});

describe("Get-By-Id-> Skills-Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    await expect(() =>
      getByIdCase(new SkillsRequestsToGetById({ id: "000-000" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(new SkillsRequestsToGetById({ id: "" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    await expect(() =>
      getByIdCase(
        new SkillsRequestsToGetById({
          id: "b2cd80d6-825d-4b67-a7a5-3cface4f19b9",
        }),
        Repository
      )
    ).rejects.toThrowError("not found");
  });
});
