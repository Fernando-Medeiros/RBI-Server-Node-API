import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";
import { deleteCase } from "../delete.case";
import { CharacterRequestsToDelete } from "../requests/delete.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

const InMemoryRepository = new InMemoryCharacterRepository();

describe("UseCases - Character - Delete - OK", () => {
  helpers.insertOneCharacterToDatabase();

  const { pubId: sub } = helpers.getCharacterDataMock();

  it("should delete the character", async () => {
    const res = await deleteCase(
      new CharacterRequestsToDelete({ sub }),
      InMemoryRepository
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Character - Delete - Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(new CharacterRequestsToDelete({}), InMemoryRepository)
    ).rejects.toThrowError("not found");
  });
});
