import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { StatusMock } from "../mock/status.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new StatusMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Status - Delete - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/status", mock.dataToCreate, headers);
  });

  it("Should return 204 when deleting the status", async () => {
    const res = await app.delete("/status").set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
