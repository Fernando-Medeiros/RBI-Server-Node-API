import { describe, it, expect } from "vitest";

import { Equipment } from "./equipment";

const dataMock = {
  head: {},
  body: {},
  leg: {},
  handLeft: {},
  handRight: {},
  accessoryLeft: {},
  accessoryRight: {},
};

const itemsMock = {
  head: { name: "wooden helm", defense: 2, resistance: 1, value: 1 },
  body: { name: "wooden armor", defense: 2, resistance: 1, value: 1 },
  weaponLeft: { name: "dagger", attack: 2, magic: 0, value: 1 },
  weaponRight: { name: "knife", attack: 2, magic: 0, value: 1 },
  leg: { name: "greaves", defense: 2, resistance: 1, value: 1 },
  accessory: {name: "wooden ring", type: "ring", value: 4, health: 2, energy: 2}
};

const equipment = new Equipment(dataMock);

describe("Domain - Equipment - OK", () => {
  it("should get the data to save", () => {
    expect(equipment.getDataToSave()).toEqual(dataMock);
    expect(equipment.getDataToSave()).toBeTypeOf("object");
  });
});

describe("Domain -> Equipment -> SET Items -> OK", () => {
  it("Should add a head to equipment", () => {
    const { head } = itemsMock;

    equipment.setHead = head;
  });

  it("Should add a body to equipment", () => {
    const { body } = itemsMock;

    equipment.setBody = body;
  });

  it("Should add a leg to equipment", () => {
    const { leg } = itemsMock;

    equipment.setLeg = leg;
  });

  it("Should add a handLeft to equipment", () => {
    const { weaponLeft } = itemsMock;

    equipment.setHandLeft = weaponLeft;
  });

  it("Should add a handRight to equipment", () => {
    const { weaponRight } = itemsMock;

    equipment.setHandRight = weaponRight;
  });

  it("Should add a accessoryLeft to equipment", () => {
    const { accessory } = itemsMock;

    equipment.setAccessoryLeft = accessory;
  });

  it("Should add a accessoryRight to equipment", () => {
    const { accessory } = itemsMock;

    equipment.setAccessoryRight = accessory;
  });
});

describe("Domain -> Equipment -> GET Items -> OK", () => {
  it("Should get the head inside the equipment", () => {
    const { head } = itemsMock;

    expect(equipment.getHead).toEqual(head);
  });

  it("Should get the body inside the equipment", () => {
    const { body } = itemsMock;

    expect(equipment.getBody).toEqual(body);
  });

  it("Should get the leg inside the equipment", () => {
    const { leg } = itemsMock;

    expect(equipment.getLeg).toEqual(leg);
  });

  it("Should get the handLeft inside the equipment", () => {
    const { weaponLeft } = itemsMock;

    expect(equipment.getHandLeft).toEqual(weaponLeft);
  });

  it("Should get the handRight inside the equipment", () => {
    const { weaponRight } = itemsMock;

    expect(equipment.getHandRight).toEqual(weaponRight);
  });

  it("Should get the accessoryLeft inside the equipment", () => {
    const { accessory } = itemsMock;

    expect(equipment.getAccessoryLeft).toEqual(accessory);
  });

  it("Should get the accessoryRight inside the equipment", () => {
    const { accessory } = itemsMock;

    expect(equipment.getAccessoryRight).toEqual(accessory);
  });
});
