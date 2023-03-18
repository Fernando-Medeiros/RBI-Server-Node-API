import { describe, it, expect } from "vitest";

import { Skill } from "./skills";

const dataMock = {
  pubId: "123",
  offensive: [],
  defensive: [],
};

const skillsMock = {
  offensive: { name: "slash", type: "attack", attack: 10, magic: 5 },
  defensive: { name: "fire wall", type: "defense", defense: 10, resistance: 5 },
};

const skills = new Skill(dataMock);

describe("Domain -> Status -> OK", () => {
  it("Should get the data to save", () => {
    expect(skills.getDataToSave()).toEqual(dataMock);
    expect(skills.getDataToSave()).toBeTypeOf("object");
  });
});

describe("Domain -> status -> SET Items -> OK", () => {
  it("Should add offensive skill", () => {
    const { offensive } = skillsMock;

    skills.setOffensive = offensive;

    expect(skills.getOffensiveSkills).toContain(offensive);
  });

  it("Should add defensive skill", () => {
    const { defensive } = skillsMock;

    skills.setDefensive = defensive;

    expect(skills.getDefensiveSkills).toContain(defensive);
  });
});

describe("Domain -> status -> FIND Items -> OK", () => {
  it("Should find offensive skill", () => {
    const { offensive } = skillsMock;

    expect(skills.findOffensive(offensive.name)).toEqual(offensive);
  });

  it("Should find defensive skill", () => {
    const { defensive } = skillsMock;

    expect(skills.findDefensive(defensive.name)).toEqual(defensive);
  });
});
