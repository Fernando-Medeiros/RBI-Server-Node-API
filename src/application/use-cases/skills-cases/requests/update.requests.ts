import type { SkillsUpdateProps } from "../repository/skills.props";
import type { ISkillsRequestsToUpdate } from "../repository/skills.requests.interfaces";
import { SkillsValidators as validate } from "../validators/validators";
import { BadRequest } from "utils/http.exceptions";

export class SkillsRequestsToUpdate implements ISkillsRequestsToUpdate {
  constructor(
    protected sub: string,
    protected props: {
      offensive?: [] | object[];
      defensive?: [] | object[];
    }
  ) {}

  getRequestToUpdate(): { sub: string; toUpdate: SkillsUpdateProps } {
    const { offensive, defensive } = this.props;

    const skills = {
      ...(offensive && { offensive: validate.offensive(offensive) }),
      ...(defensive && { defensive: validate.defensive(defensive) }),
    };

    const items = Object.values(skills).filter((I) => I?.values != undefined);

    if (items.length === 0) {
      throw new BadRequest("No data to be updated!");
    }

    const dataToUpdate = {};

    Object.assign(dataToUpdate, skills);

    return { sub: this.sub, toUpdate: dataToUpdate };
  }
}
