import { v4 } from "uuid";
import { Skill } from "domain/entities/skills/skills";
import skillsDataMock from "./skills.data.mock.json";

skillsDataMock.pubId = v4();

export class SkillsMock {
  constructor(private props = new Skill(skillsDataMock)) {}

  get pubId(): string {
    return skillsDataMock.pubId;
  }

  get dataToCreate() {
    return this.props.getDataToSave();
  }
}
