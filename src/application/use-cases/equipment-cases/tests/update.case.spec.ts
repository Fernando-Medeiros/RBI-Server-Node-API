import { describe, it, expect } from "vitest";
import { UseCaseEquipmentsHelpers as helpers } from "./mock/utils";

import { updateCase } from "../update.case";
import { EquipmentRequestsToUpdate } from "../requests/update.requests";
import { InMemoryEquipmentRepository } from "./mock/inMemoryEquipmentRepository";

const { pubId: sub } = helpers.getDataMock();

describe("UseCases - Equipment - Update - OK", () => {
  helpers.insertOneToDatabase();

  const data = helpers.getDataMock();

  it("Should update all Equipment", async () => {
    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update head", async () => {
    data.head = helpers.getFakeArmor();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update body", async () => {
    data.body = helpers.getFakeArmor();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update leg", async () => {
    data.leg = helpers.getFakeArmor();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update handLeft", async () => {
    data.handLeft = helpers.getFakeWeapon();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update handRight", async () => {
    data.handRight = helpers.getFakeWeapon();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update accessoryLeft", async () => {
    data.accessoryLeft = helpers.getFakeAccessory();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update accessoryRight", async () => {
    data.accessoryRight = helpers.getFakeAccessory();

    const res = await updateCase(
      new EquipmentRequestsToUpdate(sub, data),
      new InMemoryEquipmentRepository()
    );
    expect(res).toBeUndefined();
  });
});

describe("UseCases - Equipment - Update - Exceptions", () => {
  let data = helpers.getDataMock();

  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, {}),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid head", async () => {
    data = helpers.getDataMock();
    data.head = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid body", async () => {
    data = helpers.getDataMock();
    data.body = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid leg", async () => {
    data = helpers.getDataMock();
    data.leg = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid handLeft", async () => {
    data = helpers.getDataMock();
    data.handLeft = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid handRight", async () => {
    data = helpers.getDataMock();
    data.handRight = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid accessoryLeft", async () => {
    data = helpers.getDataMock();
    data.accessoryLeft = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid accessoryRight", async () => {
    data = helpers.getDataMock();
    data.accessoryRight = { name: "missing fields" };

    await expect(() =>
      updateCase(
        new EquipmentRequestsToUpdate(sub, data),
        new InMemoryEquipmentRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });
});
