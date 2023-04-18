import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Status - Create - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/status", mock.dataToCreate, headers);
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/status", headers);
  });

  it("Should return 400 when submitting a status already in use", async () => {
    const res = await app.post("/status").set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .post("/status")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
