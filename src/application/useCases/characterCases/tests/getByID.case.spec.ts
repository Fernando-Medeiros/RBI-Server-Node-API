import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "@app/useCases/characterCases/getByIdCase";
import { CharacterRequestsToFindById } from "@app/useCases/characterCases/requests/findById.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get By Id - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("should get by id", async () => {
    const { pubId: sub } = helpers.getCharacterDataMock();

    const res = await getByIdCase(
      new CharacterRequestsToFindById(sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toContain({ pubId: sub });
    expect(res).toBeTypeOf("object");
  });
});
