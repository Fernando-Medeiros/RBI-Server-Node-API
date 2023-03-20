import type { ISkillsRequestsToCreate } from "../repository/skills.requests.interfaces";

export class SkillsRequestsToCreate implements ISkillsRequestsToCreate {
  constructor(protected sub: string) {}

  getRequestToCreate(): { sub: string } {
    return { sub: this.sub };
  }
}
