import { describe, it, expect } from "vitest";
import { UseCaseSkillsHelpers as helpers } from "./mock/utils";

import { updateCase } from "../update.case";
import { SkillsRequestsToUpdate } from "../requests/update.requests";
import { InMemorySkillsRepository } from "./mock/inMemorySkillsRepository";

const sub = helpers.getPubId();

describe("UseCases - Skills - Update - OK", () => {
  helpers.insertOneToDatabase();

  const data = helpers.getDataMock();

  it("Should update all Skills", async () => {
    const res = await updateCase(
      new SkillsRequestsToUpdate(sub, data),
      new InMemorySkillsRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update one offensive skill", async () => {
    data.offensive.push(helpers.getFakeOffensive());

    const res = await updateCase(
      new SkillsRequestsToUpdate(sub, data),
      new InMemorySkillsRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update two offensive skills", async () => {
    data.offensive.push(helpers.getFakeOffensive(), helpers.getFakeOffensive());

    const res = await updateCase(
      new SkillsRequestsToUpdate(sub, data),
      new InMemorySkillsRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update one defensive skill", async () => {
    data.defensive.push(helpers.getFakeDefensive());

    const res = await updateCase(
      new SkillsRequestsToUpdate(sub, data),
      new InMemorySkillsRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update tow defensive skills", async () => {
    data.defensive.push(helpers.getFakeDefensive(), helpers.getFakeDefensive());

    const res = await updateCase(
      new SkillsRequestsToUpdate(sub, data),
      new InMemorySkillsRepository()
    );
    expect(res).toBeUndefined();
  });

  it("Should update tow offensive and defensive skills", async () => {
    data.offensive.push(helpers.getFakeOffensive(), helpers.getFakeOffensive());
    data.defensive.push(helpers.getFakeDefensive(), helpers.getFakeDefensive());

    const res = await updateCase(
      new SkillsRequestsToUpdate(sub, data),
      new InMemorySkillsRepository()
    );
    expect(res).toBeUndefined();
  });
});

describe("UseCases - Skills - Update - Exceptions", () => {
  let data = helpers.getDataMock();

  it("Should return [no data] when passing an empty object", async () => {
    await expect(() =>
      updateCase(
        new SkillsRequestsToUpdate(sub, {}),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("No data");
  });

  it("Should return an error when sending invalid offensive skill", async () => {
    data = helpers.getDataMock();
    data.offensive.push({
      name: "missing fields",
      invalidField0: 2,
      invalidField1: true,
      invalidField2: "...",
    });

    await expect(() =>
      updateCase(
        new SkillsRequestsToUpdate(sub, data),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending invalid defensive skill", async () => {
    data = helpers.getDataMock();
    data.defensive.push({
      name: "missing fields",
      invalidField0: 2,
      invalidField1: true,
      invalidField2: "...",
    });

    await expect(() =>
      updateCase(
        new SkillsRequestsToUpdate(sub, data),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });

  it("Should return an error when sending offensive and defensive skill without content", async () => {
    data = helpers.getDataMock();
    data.offensive.push({});
    data.defensive.push({});

    await expect(() =>
      updateCase(
        new SkillsRequestsToUpdate(sub, data),
        new InMemorySkillsRepository()
      )
    ).rejects.toThrowError("Missing fields");
  });
});
