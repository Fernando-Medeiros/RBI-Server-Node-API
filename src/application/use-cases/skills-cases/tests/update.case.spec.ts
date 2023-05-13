import { describe, it, expect } from "vitest";
import { SkillsRequestsToUpdate } from "../requests/update.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";
import { UseCaseSkillsHelpers } from "./mock/utils";
import { updateCase } from "../update.case";

const Repository = new InMemorySkillsRepository();
const Helpers = new UseCaseSkillsHelpers(Repository);
const sub = Helpers.pubId();

describe("Update-> Skills-OK", () => {
  Helpers.insertOneToDatabase();

  const data = Helpers.getDataMock();

  it("Should update all Skills", async () => {
    const res = await updateCase(
      new SkillsRequestsToUpdate({ sub, ...data }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update one offensive skill", async () => {
    const offensive = [Helpers.getFakeOffensive()];

    const res = await updateCase(
      new SkillsRequestsToUpdate({ sub, offensive }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update two offensive skills", async () => {
    const offensive = [Helpers.getFakeOffensive(), Helpers.getFakeOffensive()];

    const res = await updateCase(
      new SkillsRequestsToUpdate({ sub, offensive }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update one defensive skill", async () => {
    const defensive = [Helpers.getFakeDefensive()];

    const res = await updateCase(
      new SkillsRequestsToUpdate({ sub, defensive }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update tow defensive skills", async () => {
    const defensive = [Helpers.getFakeDefensive(), Helpers.getFakeDefensive()];

    const res = await updateCase(
      new SkillsRequestsToUpdate({ sub, defensive }),
      Repository
    );
    expect(res).toBeUndefined();
  });

  it("Should update tow offensive and defensive skills", async () => {
    const [offensive, defensive] = [
      [Helpers.getFakeOffensive(), Helpers.getFakeOffensive()],
      [Helpers.getFakeDefensive(), Helpers.getFakeDefensive()],
    ];

    const res = await updateCase(
      new SkillsRequestsToUpdate({ sub, offensive, defensive }),
      Repository
    );
    expect(res).toBeUndefined();
  });
});

describe("Update-> Skills-Exceptions", () => {
  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(new SkillsRequestsToUpdate({ sub }), Repository)
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid offensive skill", async () => {
    const offensive = [
      Object({
        name: "missing fields",
        invalidField0: 2,
        invalidField1: true,
        invalidField2: "...",
      }),
    ];

    await expect(() =>
      updateCase(new SkillsRequestsToUpdate({ sub, offensive }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid defensive skill", async () => {
    const defensive = [
      Object({
        name: "missing fields",
        invalidField0: 2,
        invalidField1: true,
        invalidField2: "...",
      }),
    ];

    await expect(() =>
      updateCase(new SkillsRequestsToUpdate({ sub, defensive }), Repository)
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending offensive and defensive skill without content", async () => {
    await expect(() =>
      updateCase(new SkillsRequestsToUpdate({ sub }), Repository)
    ).rejects.toThrowError("No data");
  });
});
