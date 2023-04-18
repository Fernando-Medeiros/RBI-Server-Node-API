import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, secretHeader } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import { HelperHeaders } from "@tes/config/helpers/get-auth-header";
import { Helpers } from "@tes/config/helpers/insert-remove";

import offensiveExample from "@dom/skills/examples/offensive.example.json";
import defensiveExample from "@dom/skills/examples/defensive.example.json";

const mock = new SkillsMock();
const headers = { ...secretHeader, Authorization: "" };

describe("Skills - Update - Success", async () => {
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

  it("Should update the all skills", async () => {
    const toUpdate = {
      offensive: [offensiveExample],
      defensive: [defensiveExample],
    };

    const res = await app.patch("/skills").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the offensive skill", async () => {
    const toUpdate = { offensive: [offensiveExample] };

    const res = await app.patch("/skills").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the defensive skill", async () => {
    const toUpdate = { defensive: [defensiveExample] };

    const res = await app.patch("/skills").send(toUpdate).set(headers);

    expect(res.statusCode).toEqual(204);
  });
});
