import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { StatusMock } from "../mock/status.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new StatusMock();

describe("Status - Create - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.removeAfterAll("/status", header);

  it("Should return 201 when creating new status", async () => {
    const res = await app.post("/status").set(header);

    expect(res.statusCode).toEqual(201);
  });
});
