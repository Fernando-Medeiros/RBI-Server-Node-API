import { describe, expect, it } from "vitest";
import { v4 } from "uuid";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Get By Id - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/status", mock.dataToCreate, header);
  helpers.removeAfterAll("/status", header);

  it("Should return 400 when sending an invalid id", async () => {
    const res = await app.get(`/status/${"00000000000000"}`).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/status/${mock.pubId}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when sending a valid but nonexistent id", async () => {
    const res = await app.get(`/status/${v4()}`).set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
