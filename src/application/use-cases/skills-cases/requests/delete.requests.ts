import type { ISkillsRequestsToDelete } from "../repository/skills.requests.interfaces";

export class SkillsRequestsToDelete implements ISkillsRequestsToDelete {
  constructor(protected sub: string) {}

  getRequestToDelete(): { sub: string } {
    return { sub: this.sub };
  }
}
