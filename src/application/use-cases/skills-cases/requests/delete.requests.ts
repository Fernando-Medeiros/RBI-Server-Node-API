import type { ISkillsRequestsToDelete } from '../repository/skills.requests.interfaces';

export class SkillsRequestsToDelete implements ISkillsRequestsToDelete {
    constructor(readonly payload: { sub: string }) {}

    getRequestToDelete(): { sub: string } {
        return { sub: this.payload.sub };
    }
}
