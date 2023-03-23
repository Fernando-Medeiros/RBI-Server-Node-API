import { describe, test, expect } from "vitest";
import { app } from "@tes/config/config";
import { CharacterMock } from "@tes/integration/characters/mock/character.mock";
import {
  HelperInsertRemove as helpers,
  HelperHeaders as helperHeader,
} from "@tes/config/helpers";

const mock = new CharacterMock("XTesterXY");

describe("E2E - Delete all character data - Success", async () => {
  const header = await helperHeader.getAuthorizationHeader(mock.pubId);

  helpers.insertBeforeAll("/characters", mock.dataToCreate, header);
  helpers.insertBeforeAll("/status", {}, header);
  helpers.insertBeforeAll("/equipments", {}, header);
  helpers.insertBeforeAll("/inventories", {}, header);
  helpers.insertBeforeAll("/skills", {}, header);

  test("Should delete full character data", async () => {
    const [character, status, equipment, inventory, skills] = await Promise.all(
      [
        await app.delete("/characters").set(header),
        await app.delete("/status").set(header),
        await app.delete("/equipments").set(header),
        await app.delete("/inventories").set(header),
        await app.delete("/skills").set(header),
      ]
    );

    expect(character.statusCode).toEqual(204);
    expect(status.statusCode).toEqual(204);
    expect(equipment.statusCode).toEqual(204);
    expect(inventory.statusCode).toEqual(204);
    expect(skills.statusCode).toEqual(204);
  });
});
