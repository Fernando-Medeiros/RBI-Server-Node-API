import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new SkillsMock();

describe("Equipment - Get By Id - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/skills", mock.dataToCreate, header);
  helpers.removeAfterAll("/skills", header);

  it("Should return skills", async () => {
    const res = await app.get(`/skills/${mock.pubId}`).set(header);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("pubId");
  });
});
