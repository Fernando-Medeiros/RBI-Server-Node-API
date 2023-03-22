import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import { HelperHeaders as helperHeader } from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Delete - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/status")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent status", async () => {
    const res = await app.delete("/status").set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
