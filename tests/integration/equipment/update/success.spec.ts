import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

import accessoryExample from "@dom/items/examples/accessory.example.json";
import armorExample from "@dom/items/examples/armor.example.json";
import weaponExample from "@dom/items/examples/weapon.example.json";

const mock = new EquipmentMock();

describe("Equipment - Update - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/equipments", mock.dataToCreate, header);
  helpers.removeAfterAll("/equipments", header);

  it("Should update the all equipments", async () => {
    const toUpdate = {
      head: armorExample,
      body: armorExample,
      leg: armorExample,
      handLeft: weaponExample,
      handRight: weaponExample,
      accessoryLeft: accessoryExample,
      accessoryRight: accessoryExample,
    };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the head", async () => {
    const toUpdate = { head: armorExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the body", async () => {
    const toUpdate = { body: armorExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the leg", async () => {
    const toUpdate = { leg: armorExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the handLeft", async () => {
    const toUpdate = { handLeft: weaponExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the handRight", async () => {
    const toUpdate = { handRight: weaponExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the accessoryLeft", async () => {
    const toUpdate = { accessoryLeft: accessoryExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the accessoryRight", async () => {
    const toUpdate = { accessoryRight: accessoryExample };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });
});
