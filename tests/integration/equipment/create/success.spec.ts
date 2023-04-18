import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new EquipmentMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Equipment - Create - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/equipments", headers);
  });

  it("Should return 201 when creating new equipment", async () => {
    const res = await app.post("/equipments").set(headers);

    expect(res.statusCode).toEqual(201);
  });
});
