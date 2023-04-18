import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Equipment - Update - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/equipments", mock.dataToCreate, headers);
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/equipments", headers);
  });

  it("Should return 400 when trying to update invalid head", async () => {
    const toUpdate = { head: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid body", async () => {
    const toUpdate = { body: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid leg", async () => {
    const toUpdate = { leg: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid handLeft", async () => {
    const toUpdate = { handLeft: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid handRight", async () => {
    const toUpdate = { handRight: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid accessoryLeft", async () => {
    const toUpdate = { accessoryLeft: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid accessoryRight", async () => {
    const toUpdate = { accessoryRight: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/equipments")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
