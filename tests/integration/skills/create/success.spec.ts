import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Skills - Create - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/skills", headers);
  });

  it("Should return 201 when creating new skills", async () => {
    const res = await app.post("/skills").set(headers);

    expect(res.statusCode).toEqual(201);
  });
});
