import { describe, it, expect } from "vitest";

import { getAllCase } from "@app/useCases/characterCases/getAllCase";
import { InMemoryCharacterRepositoryMock } from "./mock/inMemoryCharacterRepository";

describe("UseCases - Character - Get All - OK", () => {
  it("should get a empty array", async () => {
    const res = await getAllCase(new InMemoryCharacterRepositoryMock());

    expect(res).instanceOf(Array);
    expect(res.length).toBe(0);
  });
});
