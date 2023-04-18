import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Skills - Delete - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .delete("/skills")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when trying to delete non-existent skills", async () => {
    const res = await app.delete("/skills").set(headers);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
