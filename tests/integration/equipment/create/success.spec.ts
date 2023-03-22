import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new EquipmentMock();

describe("Equipment - Create - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.removeAfterAll("/equipments", header);

  it("Should return 201 when creating new equipment", async () => {
    const res = await app.post("/equipments").set(header);

    expect(res.statusCode).toEqual(201);
  });
});
