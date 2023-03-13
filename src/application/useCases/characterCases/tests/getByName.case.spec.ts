import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { getByNameCase } from "@app/useCases/characterCases/getByNameCase";
import { CharacterRequestsToFindByName } from "@app/useCases/characterCases/requests/findByName.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get By Name - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("should get by name", async () => {
    const { charName: name } = helpers.getCharacterDataMock();

    const res = await getByNameCase(
      new CharacterRequestsToFindByName(name),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toContain({ charName: name });
    expect(res).toBeTypeOf("object");
  });
});
