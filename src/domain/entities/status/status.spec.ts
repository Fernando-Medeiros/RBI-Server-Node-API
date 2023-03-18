import { describe, it, expect } from "vitest";

import { Status } from "./status";

const dataMock = {
  pubId: "123",
  points: 1,
  experience: 1,
  strength: 1,
  intelligence: 1,
  dexterity: 1,
  vitality: 1,
  health: 1,
  energy: 1,
  currentHealth: 1,
  currentEnergy: 1,
};

const status = new Status(dataMock);

describe("Domain -> Status -> OK", () => {
  it("Should get the data to save", () => {
    expect(status.getDataToSave()).toEqual(dataMock);
    expect(status.getDataToSave()).toBeTypeOf("object");
  });
});

describe("Domain -> status -> SET Items -> OK", () => {
  const pts = 10;

  it("Should add points to status", () => {
    status.setPoints = pts;

    expect(status.getPoints).toEqual(pts);
  });

  it("Should add experience to status", () => {
    status.setExperience = pts;

    expect(status.getExperience).toEqual(pts);
  });

  it("Should add strength to status", () => {
    status.setStrength = pts;

    expect(status.getStrength).toEqual(pts);
  });

  it("Should add intelligence status", () => {
    status.setIntelligence = pts;

    expect(status.getIntelligence).toEqual(pts);
  });

  it("Should add dexterity to status", () => {
    status.setDexterity = pts;

    expect(status.getDexterity).toEqual(pts);
  });

  it("Should add vitality to status", () => {
    status.setVitality = pts;

    expect(status.getVitality).toEqual(pts);
  });

  it("Should add health to status", () => {
    status.setHealth = pts;

    expect(status.getHealth).toEqual(pts);
  });

  it("Should add energy to status", () => {
    status.setEnergy = pts;

    expect(status.getEnergy).toEqual(pts);
  });

  it("Should add current health to status", () => {
    status.setCurrentHealth = pts;

    expect(status.getCurrentHealth).toEqual(pts);
  });

  it("Should add current energy to status", () => {
    status.setCurrentEnergy = pts;

    expect(status.getCurrentEnergy).toEqual(pts);
  });
});
