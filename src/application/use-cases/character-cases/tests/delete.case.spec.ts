import { describe, it, expect } from "vitest";
import { CharacterRequestsToDelete } from "../requests/delete.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";
import { UseCaseCharacterHelpers } from "./mock/utils";
import { deleteCase } from "../delete.case";

const Repository = new InMemoryCharacterRepository();
const Helpers = new UseCaseCharacterHelpers(Repository);

describe("Delete-> Character-OK", () => {
  Helpers.insertOneCharacterToDatabase();

  it("should delete the character", async () => {
    const res = await deleteCase(
      new CharacterRequestsToDelete({ sub: Helpers.pubId() }),
      Repository
    );

    expect(res).toBeUndefined();
  });
});

describe("Delete-> Character-Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(new CharacterRequestsToDelete(Object({})), Repository)
    ).rejects.toThrowError("not found");
  });
});
