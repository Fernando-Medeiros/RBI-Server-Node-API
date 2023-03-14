import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeNameUpOk");

describe("Character - Update - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.removeAfterAll("/characters", header);

  it("Should update the charName", async () => {
    const toUpdate = { charName: "NewCharNameOK" };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update the className", async () => {
    const toUpdate = { className: "Warrior" };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update the level", async () => {
    const toUpdate = { level: 2 };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });

  it("Should update level, charName and className", async () => {
    const toUpdate = {
      level: 3,
      charName: "NewUpdateName",
      className: "Rogue",
    };

    const res = await app.patch("/characters").send(toUpdate).set(header);

    expect(res.statusCode).toEqual(204);
    expect(res.body).toBeNull;
  });
});
