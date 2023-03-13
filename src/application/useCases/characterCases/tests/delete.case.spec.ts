import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { deleteCase } from "@app/useCases/characterCases/deleteCase";
import { CharacterRequestsToDelete } from "@app/useCases/characterCases/requests/delete.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Delete - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("should delete", async () => {
    const { pubId: sub } = helpers.getCharacterDataMock();

    const res = await deleteCase(
      new CharacterRequestsToDelete(sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });
});
