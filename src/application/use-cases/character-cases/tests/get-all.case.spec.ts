import { describe, it, expect } from "vitest";
import { InMemoryCharacterRepository } from "./mock/inMemoryCharacterRepository";
import { UseCaseCharacterHelpers } from "./mock/utils";
import { getAllCase } from "../get-all.case";

const Repository = new InMemoryCharacterRepository();
const Helpers = new UseCaseCharacterHelpers(Repository);

describe("Get-All-> Character-OK", () => {
  it("Should get an empty array", async () => {
    const res = await getAllCase(Repository);

    expect(res).instanceOf(Array);
    expect(res.length).toBe(0);
  });

  it("Should return a list of characters", async () => {
    Helpers.insertOneCharacterToDatabase();

    const res = await getAllCase(Repository);

    expect(res[0]).toBeTypeOf("object");
    expect(res[0]).toHaveProperty("pubId");
    expect(res.length).toBe(1);
  });
});
