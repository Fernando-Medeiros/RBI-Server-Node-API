import { describe, it, expect, beforeAll } from "vitest";
import { app, secretHeader } from "tests/config/config";
import { SkillsMock } from "../mock/skills.mock";
import { HelperHeaders } from "tests/config/helpers/get-auth-header";
import { Helpers } from "tests/config/helpers/insert-remove";

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Skills - Delete - Success", async () => {
  beforeAll(async () => {
    Object.assign(
      headers,
      await HelperHeaders.mockAuthorizationHeader(mock.pubId)
    );
    await Helpers.insertBeforeAll("/skills", mock.dataToCreate, headers);
  });

  it("Should return 204 when deleting the skills", async () => {
    const res = await app.delete("/skills").set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
