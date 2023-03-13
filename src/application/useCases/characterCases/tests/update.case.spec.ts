import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { updateCase } from "@app/useCases/characterCases/updateCase";
import { CharacterRequestsToUpdate } from "@app/useCases/characterCases/requests/update.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Update - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("should update character", async () => {
    const { pubId: sub } = helpers.getCharacterDataMock();

    const charName = "fakeName";
    const className = "Mage";
    const level = 2;

    const res = await updateCase(
      new CharacterRequestsToUpdate(charName, className, level, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });
});
