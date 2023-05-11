import { it, expect, describe } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";
import { createCase } from "../create.case";
import { CharacterRequestsToCreate } from "../requests/create.requests";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

const InMemoryRepository = new InMemoryCharacterRepository();

describe("UseCases - Character - Create - OK", () => {
  const { pubId: sub, ...payload } = helpers.getCharacterDataMock();

  it("Should create the character", async () => {
    const res = await createCase(
      new CharacterRequestsToCreate({ sub, ...payload }),
      InMemoryRepository
    );

    expect(res).toBeUndefined();
  });
});

describe("UseCases - Character - Create - Exceptions", () => {
  const { pubId: sub, ...payload } = helpers.getCharacterDataMock();

  it("Should return [invalid format] when entering an invalid charName", async () => {
    payload.charName = "Fake-Name-@@";

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate({ sub, ...payload }),
        InMemoryRepository
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [invalid format] when entering an invalid className", async () => {
    payload.className = "M@ge";

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate({ sub, ...payload }),
        InMemoryRepository
      )
    ).rejects.toThrowError("format is invalid");
  });

  it("Should return [already in use] when informing a name in use", async () => {
    const { pubId: sub, ...payload } = helpers.getCharacterDataMock();

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate({ sub, ...payload }),
        InMemoryRepository
      )
    ).rejects.toThrowError("name is already in use");
  });

  it("Should return [invalid format] when sending null data", async () => {
    const [charName, className, sub] = [undefined, "", ""];

    await expect(() =>
      createCase(
        new CharacterRequestsToCreate(Object({ charName, className, sub })),
        InMemoryRepository
      )
    ).rejects.toThrowError("format is invalid");
  });
});

describe("UseCases - Character - Create - Loop-Exceptions", () => {
  const { pubId: sub, ...payload } = helpers.getCharacterDataMock();

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
            new CharacterRequestsToCreate({ sub, ...payload, charName }),
            InMemoryRepository
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
            new CharacterRequestsToCreate({ sub, ...payload, charName }),
            InMemoryRepository
          )
        ).rejects.toThrowError("format is invalid");
      }
    }
  });
});
