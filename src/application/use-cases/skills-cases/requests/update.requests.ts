import type { SkillsUpdateProps } from "../repository/skills.props";
import type { ISkillsRequestsToUpdate } from "../repository/skills.requests.interfaces";
import { SkillsValidators as validate } from "../validators/validators";
import { BadRequest } from "utils/http.exceptions";

export class SkillsRequestsToUpdate implements ISkillsRequestsToUpdate {
  constructor(readonly payload: SkillsUpdateProps & { sub: string }) {}

  getRequestToUpdate(): { sub: string; toUpdate: SkillsUpdateProps } {
    const { sub, offensive, defensive } = this.payload;

    const toUpdate = {
      ...(offensive && { offensive: validate.offensive(offensive) }),
      ...(defensive && { defensive: validate.defensive(defensive) }),
    };

    if (!Object.values(toUpdate).length) {
      throw new BadRequest("No data to be updated!");
    }

    return { sub, toUpdate: Object(toUpdate) };
  }
}
