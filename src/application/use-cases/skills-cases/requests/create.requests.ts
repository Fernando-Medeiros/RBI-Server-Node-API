import type { ISkillsRequestsToCreate } from "../repository/skills.requests.interfaces";

export class SkillsRequestsToCreate implements ISkillsRequestsToCreate {
  constructor(readonly payload: { sub: string }) {}

  getRequestToCreate(): { sub: string } {
    return { sub: this.payload.sub };
  }
}
