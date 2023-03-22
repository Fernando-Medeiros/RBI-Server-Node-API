import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { SkillsMock } from "../mock/skills.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

import offensiveExample from "@dom/skills/examples/offensive.example.json";
import defensiveExample from "@dom/skills/examples/defensive.example.json";

const mock = new SkillsMock();

describe("Skills - Update - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/skills", mock.dataToCreate, header);
  helpers.removeAfterAll("/skills", header);

  it("Should update the all skills", async () => {
    const toUpdate = {
      offensive: [offensiveExample],
      defensive: [defensiveExample],
    };

    const res = await app.patch("/skills").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the offensive skill", async () => {
    const toUpdate = { offensive: [offensiveExample] };

    const res = await app.patch("/skills").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });

  it("Should update the defensive skill", async () => {
    const toUpdate = { defensive: [defensiveExample] };

    const res = await app.patch("/skills").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
  });
});
