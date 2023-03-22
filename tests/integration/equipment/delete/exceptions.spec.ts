import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import { HelperHeaders as helperHeader } from "@tes/config/helpers";

const mock = new EquipmentMock();

describe("Equipment - Delete - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/equipments")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent equipment", async () => {
    const res = await app.delete("/equipments").set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
