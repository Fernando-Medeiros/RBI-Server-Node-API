import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { EquipmentMock } from "../mock/equipment.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new EquipmentMock();

describe("Equipment - Delete - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/equipments", mock.dataToCreate, header);

  it("Should return 204 when deleting the equipment", async () => {
    const res = await app.delete("/equipments").set(header);

    expect(res.statusCode).toEqual(204);
  });
});
