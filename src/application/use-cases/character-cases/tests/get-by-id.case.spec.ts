import { describe, it, expect } from "vitest";
import { CharacterRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";
import { UseCaseCharacterHelpers } from "./mock/utils";
import { getByIdCase } from "../get-by-id.case";

const Repository = new InMemoryCharacterRepository();
const Helpers = new UseCaseCharacterHelpers(Repository);

describe("Get-By-Id-> Character-OK", () => {
  Helpers.insertOneCharacterToDatabase();

  it("Should get a character by id", async () => {
    const res = await getByIdCase(
      new CharacterRequestsToGetById({ id: Helpers.pubId() }),
      Repository
    );

    expect(res).toContain({ pubId: Helpers.pubId() });
  });
});

describe("Get-By-Id-> Character-Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    await expect(() =>
      getByIdCase(new CharacterRequestsToGetById({ id: "000-000" }), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(new CharacterRequestsToGetById({}), Repository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    await expect(() =>
      getByIdCase(
        new CharacterRequestsToGetById({
          id: "b2cd80d6-825d-4b67-a7a5-3cface4f19b9",
        }),
        Repository
      )
    ).rejects.toThrowError("not found");
  });
});
