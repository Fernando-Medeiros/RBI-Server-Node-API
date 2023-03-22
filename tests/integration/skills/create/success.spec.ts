import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new SkillsMock();

describe("Skills - Create - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.removeAfterAll("/skills", header);

  it("Should return 201 when creating new skills", async () => {
    const res = await app.post("/skills").set(header);

    expect(res.statusCode).toEqual(201);
  });
});
