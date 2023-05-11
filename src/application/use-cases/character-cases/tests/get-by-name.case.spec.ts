import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";
import { getByNameCase } from "../get-by-name.case";
import { CharacterRequestsToGetByName } from "../requests/get-by-name.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

const InMemoryRepository = new InMemoryCharacterRepository();

describe("UseCases - Character - Get By Name - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should get a character by name", async () => {
    const { charName: name } = helpers.getCharacterDataMock();

    const res = await getByNameCase(
      new CharacterRequestsToGetByName({ name }),
      InMemoryRepository
    );

    expect(res).toContain({ charName: name });
  });
});

describe("UseCases - Character - Get By Name - Exceptions", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should return [invalid format]", async () => {
    const name = "@@@@@";

    await expect(() =>
      getByNameCase(
        new CharacterRequestsToGetByName({ name }),
        InMemoryRepository
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [not found]", async () => {
    const name = "FakeName";

    await expect(() =>
      getByNameCase(
        new CharacterRequestsToGetByName({ name }),
        InMemoryRepository
      )
    ).rejects.toThrowError("not found");
  });
});
