import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Skills - Update - Exceptions", async () => {
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

  it("Should return 400 when trying to update invalid offensive skill", async () => {
    const toUpdate = { offensive: 0 };

    const res = await app.patch("/skills").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid defensive skill", async () => {
    const toUpdate = { defensive: 0 };

    const res = await app.patch("/skills").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/skills")
      .set({ ...secretHeader, Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
