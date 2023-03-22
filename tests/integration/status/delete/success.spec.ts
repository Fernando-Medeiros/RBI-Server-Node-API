import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Delete - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/status", mock.dataToCreate, header);

  it("Should return 204 when deleting the status", async () => {
    const res = await app.delete("/status").set(header);

    expect(res.statusCode).toEqual(204);
  });
});
