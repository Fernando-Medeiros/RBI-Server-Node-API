import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Equipment - Delete - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/equipments", mock.dataToCreate, headers);
  });

  it("Should return 204 when deleting the equipment", async () => {
    const res = await app.delete("/equipments").set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
