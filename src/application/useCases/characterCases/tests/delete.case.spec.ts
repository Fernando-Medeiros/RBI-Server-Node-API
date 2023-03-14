import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { deleteCase } from "@app/useCases/characterCases/deleteCase";
import { CharacterRequestsToDelete } from "@app/useCases/characterCases/requests/delete.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Delete - OK", () => {
  helpers.insertOneCharacterToDatabase();

  const { pubId: sub } = helpers.getCharacterDataMock();

  it("should delete the character", async () => {
    const res = await deleteCase(
      new CharacterRequestsToDelete(sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Character - Delete - Exceptions", () => {
  it("Should return [not found] when informing an id that does not exist in the database", async () => {
    await expect(() =>
      deleteCase(
        new CharacterRequestsToDelete(""),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("not found");
  });
});
