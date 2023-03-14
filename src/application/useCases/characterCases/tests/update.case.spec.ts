import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { updateCase } from "@app/useCases/characterCases/updateCase";
import { CharacterRequestsToUpdate } from "@app/useCases/characterCases/requests/update.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Update - OK", () => {
  helpers.insertOneCharacterToDatabase();

  const { pubId: sub } = helpers.getCharacterDataMock();

  it("Should update charName, className and level", async () => {
    const [charName, className, level] = ["fakeName", "Mage", 2];

    const res = await updateCase(
      new CharacterRequestsToUpdate(charName, className, level, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });

  it("Should update charName", async () => {
    const [charName, className, level] = ["FakeName", undefined, undefined];

    const res = await updateCase(
      new CharacterRequestsToUpdate(charName, className, level, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });

  it("Should update className", async () => {
    const [charName, className, level] = [undefined, "Warrior", undefined];

    const res = await updateCase(
      new CharacterRequestsToUpdate(charName, className, level, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });

  it("Should update level", async () => {
    const [charName, className, level] = [undefined, undefined, 2];

    const res = await updateCase(
      new CharacterRequestsToUpdate(charName, className, level, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Character - Update - Exceptions", () => {
  const { pubId: sub } = helpers.getCharacterDataMock();

  it("Should return [no data] when passing an empty object", async () => {
    const [charName, className, level] = [undefined, undefined, undefined];

    await expect(() =>
      updateCase(
        new CharacterRequestsToUpdate(charName, className, level, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("No data");
  });

  it("Should return [invalid format] when informing invalid charName", async () => {
    const [charName, className, level] = ["@@@@", undefined, undefined];

    await expect(() =>
      updateCase(
        new CharacterRequestsToUpdate(charName, className, level, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [invalid format] when informing invalid className", async () => {
    const [charName, className, level] = [undefined, "@@@@", undefined];

    await expect(() =>
      updateCase(
        new CharacterRequestsToUpdate(charName, className, level, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [invalid format] when informing invalid level", async () => {
    const [charName, className, level] = [undefined, undefined, -1];

    await expect(() =>
      updateCase(
        new CharacterRequestsToUpdate(charName, className, level, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });
});
