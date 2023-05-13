import { describe, it, expect } from "vitest";
import { EquipmentRequestsToUpdate } from "../requests/update.requests";
import { InMemoryEquipmentRepository } from "./mock/inMemoryEquipmentRepository";
import { UseCaseEquipmentsHelpers } from "./mock/utils";
import { updateCase } from "../update.case";

const Repository = new InMemoryEquipmentRepository();
const Helpers = new UseCaseEquipmentsHelpers(Repository);
const sub = Helpers.pubId();

describe("Update-> Equipment-OK", () => {
  Helpers.insertOneToDatabase();

  const equipments = Helpers.getDataMock();

  it("Should update all Equipment", async () => {
    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update head", async () => {
    equipments.head = Helpers.getFakeArmor();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update body", async () => {
    equipments.body = Helpers.getFakeArmor();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update leg", async () => {
    equipments.leg = Helpers.getFakeArmor();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update handLeft", async () => {
    equipments.handLeft = Helpers.getFakeWeapon();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update handRight", async () => {
    equipments.handRight = Helpers.getFakeWeapon();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update accessoryLeft", async () => {
    equipments.accessoryLeft = Helpers.getFakeAccessory();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update accessoryRight", async () => {
    equipments.accessoryRight = Helpers.getFakeAccessory();

    const res = await updateCase(
      new EquipmentRequestsToUpdate({ sub, ...equipments }),
      Repository
    );
    expect(res).toBeUndefined();
  });
});

describe("Update-> Equipment-Exceptions", () => {
  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(new EquipmentRequestsToUpdate({ sub }), Repository)
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid head", async () => {
    const head = { name: 111 };

    await expect(() =>
      updateCase(new EquipmentRequestsToUpdate({ sub, head }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid body", async () => {
    const body = { name: 111 };

    await expect(() =>
      updateCase(new EquipmentRequestsToUpdate({ sub, body }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid leg", async () => {
    const leg = { name: 111 };

    await expect(() =>
      updateCase(new EquipmentRequestsToUpdate({ sub, leg }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid handLeft", async () => {
    const handLeft = { name: 111 };

    await expect(() =>
      updateCase(new EquipmentRequestsToUpdate({ sub, handLeft }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid handRight", async () => {
    const handRight = { name: 111 };

    await expect(() =>
      updateCase(new EquipmentRequestsToUpdate({ sub, handRight }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid accessoryLeft", async () => {
    const accessoryLeft = { name: 111 };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate({ sub, accessoryLeft }),
        Repository
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid accessoryRight", async () => {
    const accessoryRight = { name: 111 };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate({ sub, accessoryRight }),
        Repository
      )
    ).rejects.toThrowError("Missing fields");
  });
});
