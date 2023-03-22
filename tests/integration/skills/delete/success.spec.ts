import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new SkillsMock();

describe("Skills - Delete - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/skills", mock.dataToCreate, header);

  it("Should return 204 when deleting the skills", async () => {
    const res = await app.delete("/skills").set(header);

    expect(res.statusCode).toEqual(204);
  });
});
