import type { ISkillsRequestsToGetById } from "../repository/skills.requests.interfaces";
import { CommonValidators } from "app/validators/common.validators";

export class SkillsRequestsToGetById implements ISkillsRequestsToGetById {
  constructor(protected sub: string) {}

  getRequestToGetById(): { sub: string } {
    CommonValidators.validateID(this.sub);

    return { sub: this.sub };
  }
}
