import { describe, test, expect } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "@tes/integration/characters/mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("XTesterXXY");

describe("E2E - Request all character data - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.removeAfterAll("/characters", header);
  helpers.removeAfterAll("/status", header);
  helpers.removeAfterAll("/equipments", header);
  helpers.removeAfterAll("/inventories", header);
  helpers.removeAfterAll("/skills", header);

  test("Should create a new character", async () => {
    const [character, status, equipment, inventory, skills] = await Promise.all(
      [
        await app.post("/characters").send(mock.dataToCreate).set(header),
        await app.post("/status").set(header),
        await app.post("/equipments").set(header),
        await app.post("/inventories").set(header),
        await app.post("/skills").set(header),
      ]
    );

    expect(character.statusCode).toEqual(201);
    expect(status.statusCode).toEqual(201);
    expect(equipment.statusCode).toEqual(201);
    expect(inventory.statusCode).toEqual(201);
    expect(skills.statusCode).toEqual(201);
  });

  test("Should receive full character data", async () => {
    const [character, status, equipment, inventory, skills] = await Promise.all(
      [
        await app.get(`/characters/${mock.pubId}`).set(header),
        await app.get(`/status/${mock.pubId}`).set(header),
        await app.get(`/equipments/${mock.pubId}`).set(header),
        await app.get(`/inventories/${mock.pubId}`).set(header),
        await app.get(`/skills/${mock.pubId}`).set(header),
      ]
    );

    const { pubId } = character.body;

    expect(character.body).toHaveProperty("charName");
    expect(status.body).toHaveProperty("points");
    expect(equipment.body).toHaveProperty("head");
    expect(inventory.body).toHaveProperty("armors");
    expect(skills.body).toHaveProperty("defensive");

    expect(status.body["pubId"]).toEqual(pubId);
    expect(equipment.body["pubId"]).toEqual(pubId);
    expect(inventory.body["pubId"]).toEqual(pubId);
    expect(skills.body["pubId"]).toEqual(pubId);
  });
});
