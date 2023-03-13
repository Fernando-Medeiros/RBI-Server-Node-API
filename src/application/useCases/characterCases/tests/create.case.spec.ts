import { it, expect, describe } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { createCase } from "@app/useCases/characterCases/createCase";
import { CharacterRequestsToCreate } from "@app/useCases/characterCases/requests/create.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Create - OK", () => {
  it("should create", async () => {
    const { charName, className, pubId: sub } = helpers.getCharacterDataMock();

    const res = await createCase(
      new CharacterRequestsToCreate(charName, className, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });
});
