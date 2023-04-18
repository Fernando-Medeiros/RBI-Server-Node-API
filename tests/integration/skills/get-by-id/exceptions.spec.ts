import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";
import { v4 } from "uuid";

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Skills - Get By Id - Exceptions", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/skills", mock.dataToCreate, headers);
  });
  afterAll(async () => {
    await Helpers.removeAfterAll("/skills", headers);
  });

  it("Should return 400 when sending an invalid id", async () => {
    const res = await app.get(`/skills/${"00000000000000"}`).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/skills/${mock.pubId}`)
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when sending a valid but nonexistent id", async () => {
    const res = await app.get(`/skills/${v4()}`).set(headers);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
