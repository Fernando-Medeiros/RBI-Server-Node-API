import { describe, it, expect } from "vitest";

import { Character } from "../entities/character";

const dataMock = {
  charName: "Example",
  className: "Peasant",
  level: 1,
  createdAt: new Date(),
};

describe("Domain - CharacterEntity - OK", () => {
  const character = new Character(dataMock);

  it("Should return entity data to save", () => {
    expect(character.getDataToSave()).toContain(dataMock);
  });

  it("Should check the get methods", () => {
    const { charName, className, level, createdAt } = dataMock;

    expect(character.getName).toEqual(charName);
    expect(character.getClass).toEqual(className);
    expect(character.getLevel).toEqual(level);
    expect(character.getCreatedAt).toEqual(createdAt);
  });

  it("Should check the set methods", () => {
    character.setName = "NewExample";
    character.setClass = "Mage";
    character.setLevel = 2;

    expect(character.getName).toEqual("NewExample");
    expect(character.getClass).toEqual("Mage");
    expect(character.getLevel).toEqual(2);
  });
});
