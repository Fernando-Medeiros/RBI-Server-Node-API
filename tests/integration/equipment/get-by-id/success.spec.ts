import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new EquipmentMock();

describe("Equipment - Get By Id - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/equipments", mock.dataToCreate, header);
  helpers.removeAfterAll("/equipments", header);

  it("Should return equipments", async () => {
    const res = await app.get(`/equipments/${mock.pubId}`).set(header);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("pubId");
  });
});
