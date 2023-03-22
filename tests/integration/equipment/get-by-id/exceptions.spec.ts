import { describe, expect, it } from "vitest";
import { v4 } from "uuid";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new EquipmentMock();

describe("Equipment - Get By Id - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/equipments", mock.dataToCreate, header);
  helpers.removeAfterAll("/equipments", header);

  it("Should return 400 when sending an invalid id", async () => {
    const res = await app.get(`/equipments/${"00000000000000"}`).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/equipments/${mock.pubId}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when sending a valid but nonexistent id", async () => {
    const res = await app.get(`/equipments/${v4()}`).set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
