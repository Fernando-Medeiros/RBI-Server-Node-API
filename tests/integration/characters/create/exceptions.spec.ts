import { describe, expect, it } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "../mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("FakeNameNewEx");

describe("Character - Create - Exceptions", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.removeAfterAll("/characters", header);

  it("Should return 400 when sending invalid name", async () => {
    const dataToCreate = {
      charName: "@@00AA",
      className: "Rogue",
    };
    const res = await app.post("/characters").send(dataToCreate).set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 400 when submitting a name already in use", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set(header);

    expect(res.statusCode).toEqual(400);
    expect(res.body).toBeTypeOf("object");
  });

  it("Should return 401 when sending invalid or null token", async () => {
    const res = await app
      .post("/characters")
      .send(mock.dataToCreate)
      .set({ Authorization: "Bearer 000000" });

    expect(res.statusCode).toEqual(401);
    expect(res.body).toBeTypeOf("object");
  });
});
