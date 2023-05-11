import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";
import { getByIdCase } from "../get-by-id.case";
import { CharacterRequestsToGetById } from "../requests/get-by-id.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

const InMemoryRepository = new InMemoryCharacterRepository();

describe("UseCases - Character - Get By Id - OK", () => {
  helpers.insertOneCharacterToDatabase();

  it("Should get a character by id", async () => {
    const { pubId: id } = helpers.getCharacterDataMock();

    const res = await getByIdCase(
      new CharacterRequestsToGetById({ id }),
      InMemoryRepository
    );

    expect(res).toContain({ pubId: id });
  });
});

describe("UseCases - Character - Get By Id - Exceptions", () => {
  it("Should return error when passing an invalid id", async () => {
    const id = "000-000";

    await expect(() =>
      getByIdCase(new CharacterRequestsToGetById({ id }), InMemoryRepository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return error when passing an null id", async () => {
    await expect(() =>
      getByIdCase(new CharacterRequestsToGetById({}), InMemoryRepository)
    ).rejects.toThrowError("Could not verify credentials");
  });

  it("Should return [not found] when entering a valid but non-existent id", async () => {
    const id = "b2cd80d6-825d-4b67-a7a5-3cface4f19b9";

    await expect(() =>
      getByIdCase(new CharacterRequestsToGetById({ id }), InMemoryRepository)
    ).rejects.toThrowError("not found");
  });
});
