import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new EquipmentMock();

describe("Equipment - Update - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/equipments", mock.dataToCreate, header);
  helpers.removeAfterAll("/equipments", header);

  it("Should return 400 when trying to update invalid head", async () => {
    const toUpdate = { head: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid body", async () => {
    const toUpdate = { body: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid leg", async () => {
    const toUpdate = { leg: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid handLeft", async () => {
    const toUpdate = { handLeft: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid handRight", async () => {
    const toUpdate = { handRight: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid accessoryLeft", async () => {
    const toUpdate = { accessoryLeft: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid accessoryRight", async () => {
    const toUpdate = { accessoryRight: { name: "", type: "" } };

    const res = await app.patch("/equipments").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/equipments")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
