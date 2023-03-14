import { it, expect, describe } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { createCase } from "@app/useCases/characterCases/createCase";
import { CharacterRequestsToCreate } from "@app/useCases/characterCases/requests/create.requests";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Create - OK", () => {
  const { charName, className, pubId: sub } = helpers.getCharacterDataMock();

  it("Should create the character", async () => {
    const res = await createCase(
      new CharacterRequestsToCreate(charName, className, sub),
      new InMemoryCharacterRepositoryMock()
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Character - Create - Exceptions", () => {
  const { charName, className, pubId: sub } = helpers.getCharacterDataMock();

  it("Should return [invalid format] when entering an invalid charName", async () => {
    const charName = "Fake-Name-@@";

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate(charName, className, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [invalid format] when entering an invalid className", async () => {
    const className = "M@ge";

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate(charName, className, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [already in use] when informing a name in use", async () => {
    await expect(() =>
      createCase(
        new CharacterRequestsToCreate(charName, className, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("name is already in use");
  });

  it("Should return [invalid format] when sending null data", async () => {
    const [charName, className, sub] = [undefined, "", ""];

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate(charName, className, sub),
        new InMemoryCharacterRepositoryMock()
      )
    ).rejects.toThrowError("format is invalid");
  });
});

describe("UseCases - Character - Create - Loop-Exceptions", () => {
  const { className, pubId: sub } = helpers.getCharacterDataMock();

  const invalidNamesForTest = [
    ["fake22", "fake()", "fake**", "fake&&", "fake##", "fake@@", "fake%%"],
    ["12345", "00fake", "fake<>", "fake-fake", "Fake=Fake", "Fake[]"],
    ["fake//", "fff", "ff", "f", " ", "   ", "\n", "/n", "$!#@"],
    ["fake=", "(*&@]", "FakeFake00", "fakeFAKE  ", "fake<<fake"],
    ["fake!!", "$$$$", "fakeÇ", "-------", "FakeFakeFakeFakeFakeFake"],
  ];

  it("Should return [invalid format] when entering loop with invalid charName", async () => {
    for (const listNames of invalidNamesForTest) {
      for (const charName of listNames) {
        await expect(() =>
          createCase(
            new CharacterRequestsToCreate(charName, className, sub),
            new InMemoryCharacterRepositoryMock()
          )
        ).rejects.toThrowError("format is invalid");
      }
    }
  });

  it("Should return [invalid format] when entering loop with invalid className", async () => {
    for (const listNames of invalidNamesForTest) {
      for (const charName of listNames) {
        await expect(() =>
          createCase(
            new CharacterRequestsToCreate(charName, className, sub),
            new InMemoryCharacterRepositoryMock()
          )
        ).rejects.toThrowError("format is invalid");
      }
    }
  });
});
