import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Create - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/status", mock.dataToCreate, header);
  helpers.removeAfterAll("/status", header);

  it("Should return 400 when submitting a status already in use", async () => {
    const res = await app.post("/status").set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .post("/status")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
