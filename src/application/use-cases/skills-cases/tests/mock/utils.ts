import { InMemorySkillsRepository } from "./inMemorySkillsRepository";

import SkillsDataMock from "./skills.data.mock.json";

import offensiveExample from "@dom/skills/examples/offensive.example.json";
import defensiveExample from "@dom/skills/examples/defensive.example.json";

const database = new InMemorySkillsRepository();

const skills = {
  offensive: [] as object[],
  defensive: [] as object[],
};

export class UseCaseSkillsHelpers {
  public static insertOneToDatabase = async (): Promise<void> => {
    await database.save(SkillsDataMock);
  };

  public static removeOneToDatabase = async (): Promise<void> => {
    const { pubId: id } = SkillsDataMock;

    await database.findByIdAndDelete(id);
  };

  public static getPubId(): string {
    return SkillsDataMock.pubId;
  }

  public static getDataMock() {
    return Object.assign({}, skills);
  }

  public static getFakeOffensive() {
    return offensiveExample;
  }

  public static getFakeDefensive() {
    return defensiveExample;
  }
}
