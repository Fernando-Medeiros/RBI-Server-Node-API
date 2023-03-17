import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { getByNameCase } from "@app/useCases/characterCases/getByNameCase";
import { CharacterRequestsToFindByName } from "@app/useCases/characterCases/requests/findByName.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get By Name - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should get a character by name", async () => {
    const { charName: name } = helpers.getCharacterDataMock();

    const res = await getByNameCase(
      new CharacterRequestsToFindByName(name),
      new InMemoryCharacterRepository()
    );

    expect(res).toContain({ charName: name });
  });
});

describe("UseCases - Character - Get By Name - Exceptions", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should return [invalid format]", async () => {
    const charName = "@@@@@";

    await expect(() =>
      getByNameCase(
        new CharacterRequestsToFindByName(charName),
        new InMemoryCharacterRepository()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [not found]", async () => {
    const charName = "FakeName";

    await expect(() =>
      getByNameCase(
        new CharacterRequestsToFindByName(charName),
        new InMemoryCharacterRepository()
      )
    ).rejects.toThrowError("not found");
  });
});
