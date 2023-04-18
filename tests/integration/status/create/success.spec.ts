import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { StatusMock } from "../mock/status.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Status - Create - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/status", headers);
  });

  it("Should return 201 when creating new status", async () => {
    const res = await app.post("/status").set(headers);

    expect(res.statusCode).toEqual(201);
  });
});
