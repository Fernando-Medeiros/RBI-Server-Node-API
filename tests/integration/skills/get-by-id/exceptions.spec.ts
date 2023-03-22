import { describe, expect, it } from "vitest";
import { v4 } from "uuid";
import { app } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new SkillsMock();

describe("Skills - Get By Id - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/skills", mock.dataToCreate, header);
  helpers.removeAfterAll("/skills", header);

  it("Should return 400 when sending an invalid id", async () => {
    const res = await app.get(`/skills/${"00000000000000"}`).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .get(`/skills/${mock.pubId}`)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 404 when sending a valid but nonexistent id", async () => {
    const res = await app.get(`/skills/${v4()}`).set(header);

    expect(res.statusCode).toEqual(404);
    expect(res.body).toHaveProperty("message");
  });
});
