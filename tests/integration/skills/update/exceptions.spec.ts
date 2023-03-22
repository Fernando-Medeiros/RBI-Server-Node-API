import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new SkillsMock();

describe("Skills - Update - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/skills", mock.dataToCreate, header);
  helpers.removeAfterAll("/skills", header);

  it("Should return 400 when trying to update invalid offensive skill", async () => {
    const toUpdate = { offensive: 0 };

    const res = await app.patch("/skills").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 400 when trying to update invalid defensive skill", async () => {
    const toUpdate = { defensive: 0 };

    const res = await app.patch("/skills").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty("message");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .patch("/skills")
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toHaveProperty("message");
  });
});
