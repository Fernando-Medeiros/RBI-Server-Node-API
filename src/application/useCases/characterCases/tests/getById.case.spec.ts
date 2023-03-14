import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "@app/useCases/characterCases/getByIdCase";
import { CharacterRequestsToFindById } from "@app/useCases/characterCases/requests/findById.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get By Id - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should get a character by id", async () => {
    const { pubId: sub } = helpers.getCharacterDataMock();

    const res = await getByIdCase(
      new CharacterRequestsToFindById(sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toContain({ pubId: sub });
  });
});

describe("UseCases - Character - Get By Id - Exceptions", () => {
  it("Should return [invalid format] when passing an invalid id", async () => {
    const sub = "000-000";

    await expect(() =>
      getByIdCase(
        new CharacterRequestsToFindById(sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [invalid format] when passing an null id", async () => {
    await expect(() =>
      getByIdCase(
        new CharacterRequestsToFindById(),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const sub = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(
        new CharacterRequestsToFindById(sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("not found");
  });
});
