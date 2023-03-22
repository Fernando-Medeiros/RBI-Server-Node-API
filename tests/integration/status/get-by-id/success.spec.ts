import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("status - Get By Id - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/status", mock.dataToCreate, header);
  helpers.removeAfterAll("/status", header);

  it("Should return a status", async () => {
    const res = await app.get(`/status/${mock.pubId}`).set(header);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("pubId");
  });
});
