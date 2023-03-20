import type { SkillsUpdateProps } from "./skills.props";

export interface ISkillsRequestsToCreate {
  getRequestToCreate(): { sub: string };
}

export interface ISkillsRequestsToUpdate {
  getRequestToUpdate(): { sub: string; toUpdate: SkillsUpdateProps };
}

export interface ISkillsRequestsToDelete {
  getRequestToDelete(): { sub: string };
}

export interface ISkillsRequestsToGetById {
  getRequestToGetById(): { sub: string };
}
