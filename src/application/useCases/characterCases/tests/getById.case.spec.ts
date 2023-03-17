import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { getByIdCase } from "../getByIdCase";
import { CharacterRequestsToFindById } from "../requests/findById.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get By Id - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should get a character by id", async () => {
    const { pubId: sub } = helpers.getCharacterDataMock();

    const res = await getByIdCase(
      new CharacterRequestsToFindById(sub),
      new InMemoryCharacterRepository()
    );

    expect(res).toContain({ pubId: sub });
  });
});

describe("UseCases - Character - Get By Id - Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    const sub = "000-000";

    await expect(() =>
      getByIdCase(
        new CharacterRequestsToFindById(sub),
        new InMemoryCharacterRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(
        new CharacterRequestsToFindById(""),
        new InMemoryCharacterRepository()
      )
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const sub = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(
        new CharacterRequestsToFindById(sub),
        new InMemoryCharacterRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
