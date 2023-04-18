import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Equipment - Delete - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/equipments")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent equipment", async () => {
    const res = await app.delete("/equipments").set(headers);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
