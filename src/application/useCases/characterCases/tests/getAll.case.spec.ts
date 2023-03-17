import { describe, it, expect } from "vitest";
import { UseCaseCharacterHelpers as helpers } from "./mock/utils";

import { getAllCase } from "@app/useCases/characterCases/getAllCase";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get All - OK", () => {
  it("Should get an empty array", async () => {
    const res = await getAllCase(new InMemoryCharacterRepository());

    expect(res).instanceOf(Array);
    expect(res.length).toBe(0);
  });

  it("Should return a list of characters", async () => {
    helpers.insertOneCharacterToDatabase();

    const res = await getAllCase(new InMemoryCharacterRepository());

    expect(res[0]).toBeTypeOf("object");
    expect(res[0]).toHaveProperty("pubId");
    expect(res.length).toBe(1);
  });
});
